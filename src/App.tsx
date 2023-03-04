import React, { useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
  Outlet
} from "react-router-dom";
import { authProvider } from "./auth";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import BurgerMaker from "./routes/burgerMaker";
import Homepage from "./routes/homepage";
import "./App.css";
import NotFound from "./routes/notFound";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/make-a-burger"
            element={
              <RequireAuth>
                <BurgerMaker />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <div className="page">
      <Header />

      <main className="container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

interface AuthContextType {
  user: any;
  signin: (user: string, password: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let [user, setUser] = useState<any>(null);


  let signin = (newUser: string, password: string, callback: VoidFunction) => {

    return authProvider.signin(newUser, password, () => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return authProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const LoginPage = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;
    let password = formData.get("password") as string;

    auth.signin(username, password, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div className="bg-white rounded-lg p-24 mt-48 login">
      <p>Welcome! Log in so we can start making burgers</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-16">
          <label>
            Username:
          </label>
          <input name="username" type="text" />
        </div>
        <div className="mb-16">
          <label>
            Your Password:
          </label>
          <input name="password" type="password" />
        </div>
        <button type="submit" className="button button--primary">Login</button>
      </form>
    </div>
  );
};
