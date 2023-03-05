import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import AuthStatus from "../parts/authStatus";

const HeaderWrapper = styled.header`
  padding: 1.5rem 0;
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

                <Link to="/">
                    <img src={logo} alt="Burger Inc. Logo" loading="eager" width="60" height="60" />
                </Link>

                <nav className="mr-auto">
                    <NavList>
                        <li>
                            <Link to="/make-a-burger" className="nav-link">Make a burger</Link>
                        </li>
                    </NavList>
                </nav>

                <AuthStatus />

            </div>
        </HeaderWrapper>
    );
};

export default Header;
