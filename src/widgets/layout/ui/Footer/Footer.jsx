import { Copyright, FooterWrapper, StyledFooter } from "./styles";
import { Logo } from "@/shared/ui";



function Footer() {
  return (
    <StyledFooter>
      <FooterWrapper>
        <Logo />
        <Copyright>Создано 2025</Copyright>
      </FooterWrapper>
    </StyledFooter >
  )
};

export { Footer };