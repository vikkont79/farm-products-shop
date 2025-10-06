import { AppRoute } from '@/app/constants/routes';
import { LogoImg, LogoLink, LogoText } from './styles';

function Logo() {
  return (
    <LogoLink to={AppRoute.Main}>
      <LogoImg aria-hidden="true" focusable="false" />
      <LogoText>Фермерские продукты</LogoText>
    </LogoLink>
  )
};

export { Logo };