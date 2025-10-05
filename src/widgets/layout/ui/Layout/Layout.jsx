import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { StyledLayout } from './styles';

function Layout({ children, showBuyButton }) {
  return (
    <StyledLayout>
      <Header showBuyButton={showBuyButton} />
      {children}
      <Footer />
    </StyledLayout>
  )
};

export { Layout };