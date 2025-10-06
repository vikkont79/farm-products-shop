import { MainPage } from '@/pages/main';
import { StorePage } from '@/pages/store';
import { Layout } from '@/widgets/layout';
import { GlobalStyle } from './styles/global.js';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AppRoute } from './constants/routes.js';
import { ProductPage } from '@/pages/product';

function App() {
  const location = useLocation();
  const showBuyButton = location.pathname !== '/order';
  return (
    <>
      <GlobalStyle />
      <Layout showBuyButton={showBuyButton}>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage />} />
          <Route path={AppRoute.Order} element={<StorePage />} />
          <Route path={`${AppRoute.Product}/:id`} element={<ProductPage />} />
        </Routes>
      </Layout>
    </>
  )
};

export { App };
