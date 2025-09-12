import logo from '@assets/images/farmer-logo.png';
import './style.css';
import { LogoLink, LogoText } from './styles';

function Logo() {
  return (
    <LogoLink href="/">
      <img src={logo} alt="Логотип" style={{ width: '44px', height: 'auto' }} />
      <LogoText>Фермерские продукты</LogoText>
    </LogoLink>
  )
};

export { Logo };