import { Button } from '@/shared/ui';
import { advantages } from '../../model';
import { About } from '../About/About'
import { Advantages } from '../Advantages/Advantages';
import './style.css';

function MainPage() {
  return (
    <main className="main">
      <h1 className="visually-hidden">Магазин фермерских продуктов</h1>
      <About />
      <Advantages advantages={advantages} />
      <Button minInlineSize={260}>Купить</Button>
    </main>
  )
};

export { MainPage };