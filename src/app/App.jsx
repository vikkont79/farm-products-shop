import { MainPage } from '@/pages/main';
import { Layout } from '@/widgets/layout';
import { GlobalStyle } from './styles/App.js';

function App() {
  return (
    <>
    <GlobalStyle />
    <Layout>
      <MainPage></MainPage>
    </Layout>
    </>
  )
};

export { App };
