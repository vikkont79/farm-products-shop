import { MainPage } from '@/pages/main';
import { StorePage } from '@/pages/store';
import { Layout } from '@/widgets/layout';
import { GlobalStyle } from './styles/App.js';
import { Route, Routes, useLocation } from 'react-router-dom';
//import { ProductPage } from '@/pages/product';

function App() {
  const location = useLocation();
  const showBuyButton = location.pathname !== '/order';
  return (
    <>
      <GlobalStyle />
      <Layout showBuyButton={showBuyButton}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='order' element={<StorePage />} />
        </Routes>
      </Layout>
    </>
  )
};

export { App };
