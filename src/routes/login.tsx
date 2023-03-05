import Input from "../components/form/input";
import { Heading } from "../components/tags/heading";
import { useAuth } from "../App";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
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
        <div className="bg-white rounded-lg p-24 mb-48 login">

            <Heading element="h1" className="mt-0 mb-16 h2">
                Welcome!<br /> Log in so we can start making burgers
            </Heading>

            <form onSubmit={handleSubmit}>

                <div className="mb-16">
                    <label>
                        Your Name:
                    </label>

                    <Input id="username" name="username" type="text" />
                </div>

                <div className="mb-16">
                    <label>
                        Your Password:
                    </label>

                    <Input id="password" name="password" type="password" />
                </div>

                <button type="submit" className="button button--primary">Login</button>

            </form>

        </div>
    );
};

export default Login;
