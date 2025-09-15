import { Button, Logo } from "@/shared/ui";
import { StyledHeader, HeaderNav } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <HeaderNav>
        <Logo />
        <Button minInlineSize={260} link="/order">
          Купить
        </Button>
      </HeaderNav>
    </StyledHeader>
  )
};

export { Header };