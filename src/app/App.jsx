import './styles/App.css';
import { Wrapper } from '../shared/ui';
import { MainPage } from '../pages/main';
import { Layout } from '../widgets/layout';

function App() {
  return (
    <Layout>
      <MainPage></MainPage>
    </Layout>
  )
}

export default App
