import React, { useState } from "react";
import {
    useNavigate,
    Link
} from "react-router-dom";

import { useAuth } from "../../App";
import "./authStatus.css";

const AuthStatus = () => {

    let auth = useAuth();
    let navigate = useNavigate();

    if (!auth.user) {
        return <div className="auth-actions">
            <Link to="/login" className="button button--primary mb-16">Login</Link>
            <div>so you can create a delicious burger</div>
        </div>;
    }

    return (
        <div className="auth-actions">
            
            <div className="mb-16">Welcome {auth.user}!{" "}</div>
            <button className="button button--primary"
                onClick={() => {
                    auth.signout(() => navigate("/"));
                }}
            >
                Sign out
            </button>
            
        </div>
    );
};

export default AuthStatus