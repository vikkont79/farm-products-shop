import logo from '../../../assets/images/farmer.png';
import './style.css';

function Logo() {
  return (
    <a href="/" className="logo__link">
      <img src={logo} alt="Логотип" style={{ width: '44px', height: 'auto' }} />
      <span className="logo__text">Фермерские продукты</span>
    </a>
  )
}

export { Logo };