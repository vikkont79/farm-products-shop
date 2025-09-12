import { Button, Logo } from "@/shared/ui";
import { StyledHeader, HeaderWrapper } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <Logo />
        <Button minInlineSize={260} link="/order">
          Купить
        </Button>
      </HeaderWrapper>
    </StyledHeader>
  )
};

export { Header };