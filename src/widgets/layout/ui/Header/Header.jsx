import { Button, Logo } from "@/shared/ui";
import { StyledHeader, HeaderNav } from "./styles";

function Header({ showBuyButton }) {
  return (
    <StyledHeader>
      <HeaderNav>
        <Logo />
        {showBuyButton &&
          <Button minInlineSize={260} link="/order">
            Купить
          </Button>
        }
      </HeaderNav>
    </StyledHeader>
  )
};

export { Header };