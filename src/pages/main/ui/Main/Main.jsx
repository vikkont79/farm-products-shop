import { Button } from '@/shared/ui';
import { advantages } from '../../model';
import { About } from '../About/About'
import { Advantages } from '../Advantages/Advantages';
import { StyledPage } from './styles';

function MainPage() {
  return (
    <StyledPage>
      <h1 className="visually-hidden">Магазин фермерских продуктов</h1>
      <About />
      <Advantages advantages={advantages} />
      <Button minInlineSize={260} link="/order">
          Купить
        </Button>
    </StyledPage>
  )
};

export { MainPage };