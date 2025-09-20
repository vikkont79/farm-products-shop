//import { MainPage } from '@/pages/main';
//import { StorePage } from '@/pages/store';
import { Layout } from '@/widgets/layout';
import { GlobalStyle } from './styles/App.js';
import { ProductPage } from '@/pages/product';

function App() {
  return (
    <>
    <GlobalStyle />
    <Layout>
      <ProductPage />
    </Layout>
    </>
  )
};

export { App };
