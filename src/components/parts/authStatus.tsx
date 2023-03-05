import { useNavigate, Link } from "react-router-dom";
import { useAuth, XmToken } from "../../App";
import "./authStatus.css";

const AuthStatus = () => {

    let auth = useAuth();

    let navigate = useNavigate();

    const handleSignout = () => {
        auth.signout(() => navigate("/"));
        if (typeof window !== "undefined")
            window.localStorage.removeItem("xmTokenLocalKey");
    }
    
	const xmToken: XmToken = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("xmTokenLocalKey")!) || {} : {};
	
	const token = xmToken?.token;

    if (token === undefined && !auth.user) {
        return (
            <div className="auth-actions">

                <Link to="/login" className="button button--primary mb-16">Login</Link>

                <div>so you can create a delicious burger</div>

            </div>
        );
    }

    return (
        <div className="auth-actions">

            <div className="mb-8">Welcome {auth.user}!{""}</div>

            <button className="button button--primary" onClick={() => { handleSignout() }}>
                Sign out
            </button>

        </div>
    );
};

export default AuthStatus
