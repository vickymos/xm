import React, { useState } from "react";
import {
	Routes,
	Route,
	useLocation,
	Navigate,
	Outlet
} from "react-router-dom";
import { authProvider } from "./auth";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import BurgerMaker from "./routes/burgerMaker";
import Homepage from "./routes/homepage";
import NotFound from "./routes/notFound";
import Login from "./routes/login";
import "./App.css";

export default function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Homepage />} />
					<Route path="/login" element={<Login />} />
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

const Layout = () => {
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

export interface XmToken {
	token: Number;
}

const RequireAuth = ({ children }: { children: JSX.Element }) => {
	let auth = useAuth();
	let location = useLocation();

	const xmToken: XmToken = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("xmTokenLocalKey")!) || {} : {};
	/**
	 * using stored token if there is one
	 * otherwise redirecting to login page
	*/
	const token = xmToken?.token;

	if (token === undefined && !auth.user) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};



