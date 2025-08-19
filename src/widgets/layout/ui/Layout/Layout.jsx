import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import './style.css';

function Layout({ children }) {
  return (
    <div className="page">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export { Layout }