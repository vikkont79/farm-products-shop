//import { MainPage } from '@/pages/main';
import { StorePage } from '@/pages/store';
import { Layout } from '@/widgets/layout';
import { GlobalStyle } from './styles/App.js';

function App() {
  return (
    <>
    <GlobalStyle />
    <Layout>
      <StorePage />
    </Layout>
    </>
  )
};

export { App };
