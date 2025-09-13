import { LogoImg, LogoLink, LogoText } from './styles';

function Logo() {
  return (
    <LogoLink href="/">
      <LogoImg aria-hidden="true" focusable="false" />
      <LogoText>Фермерские продукты</LogoText>
    </LogoLink>
  )
};

export { Logo };