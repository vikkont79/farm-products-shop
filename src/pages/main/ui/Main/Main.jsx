import { Button } from '@/shared/ui';
import { advantages } from '../../model';
import { About } from '../About/About'
import { Advantages } from '../Advantages/Advantages';
import { StyledPage } from './styles';

function MainPage() {
  return (
    <StyledPage>
      <About />
      <Advantages advantages={advantages} />
      <Button minInlineSize={260} to="/order">
        Купить
      </Button>
    </StyledPage>
  )
};

export { MainPage };