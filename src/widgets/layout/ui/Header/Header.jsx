import { Button, Logo } from "@/shared/ui";
import { StyledHeader, HeaderNav } from "./styles";
import { AppRoute } from "@/app/constants/routes";

function Header({ showBuyButton }) {
  return (
    <StyledHeader>
      <HeaderNav>
        <Logo />
        {showBuyButton &&
          <Button minInlineSize={260} link={AppRoute.Order}>
            Купить
          </Button>
        }
      </HeaderNav>
    </StyledHeader>
  )
};

export { Header };