import { Button, Wrapper } from '../../../../shared/ui';
import { About } from '../About/About'
import { Advantages } from '../Advantages/Advantages';
import './style.css';

function MainPage() {
  return (
    <main className="main">
      <h1 className="visually-hidden">Магазин фермерских продуктов</h1>
      <About />
      <Advantages />
      <Button>Купить</Button>
    </main>
  )
}

export { MainPage };