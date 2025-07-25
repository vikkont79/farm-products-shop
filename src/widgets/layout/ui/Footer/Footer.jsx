import { Wrapper } from "../../../../shared/ui";
import { Logo } from "../../../../shared/ui";
import './style.css';

function Footer() {
  return (
    <footer className="page-footer">
      <Logo />
      <span className="footer__copyright">Создано 2021</span>
    </footer>
  )
}

export { Footer };