import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../logo.svg";
import AuthStatus from "../parts/authStatus";

const HeaderWrapper = styled.header`
  padding: 2rem 0;
  background: linear-gradient(to right, var(--gradientStart) 0%, var(--gradientEnd) 100%);
  align-items: center;
  display:flex;
  margin-bottom:48px;
`;

const NavList = styled.ul`
  gap: 16px;
  margin-left: 16px;
  display:flex;
  font-weight:bold;
  color: var(--black);
`;

const Header = () => {

    return (
        <HeaderWrapper>

            <div className="container flex items-center justify-between">
                <img src={logo}
                    alt="Burger Inc. Logo"
                    loading="eager"
                    width="100"
                    height="100"
                />

                <nav className="mr-auto">
                    <NavList>
                        <li>
                            <Link to="/">Home Page</Link>
                        </li>
                        <li>
                            <Link to="/make-a-burger">Make a burger</Link>
                        </li>
                    </NavList>
                </nav>

                <AuthStatus />

            </div>
        </HeaderWrapper>
    );
};

export default Header;
