import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  margin-top: auto;
  background: linear-gradient(to right, var(--gradientStart) 0%, var(--gradientEnd) 100%);
`;

const Footer = () => {

    return (
        <FooterWrapper>
            <div className="container">
                <span>&copy; Burgerlicious 2023</span>
            </div>
        </FooterWrapper>
    );
};

export default Footer;
