import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { StyledLayout } from "./styles";

function Layout({ children }) {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  )
};

export { Layout };