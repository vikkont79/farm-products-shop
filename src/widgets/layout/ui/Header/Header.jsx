import { Button, Wrapper } from "../../../../shared/ui";
import { Logo } from "../../../../shared/ui";
import './style.css';

function Header() {
  return (
    <header className="page-header">
      <Logo />
      <Button>Купить</Button>
    </header >
  )
}

export { Header };