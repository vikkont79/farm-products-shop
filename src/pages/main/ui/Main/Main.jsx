import { Button, Wrapper } from '../../../../shared/ui';
import { About } from '../About/About'
import { Advantages } from '../Advantages/Advantages';
import './style.css';

function MainPage() {
  return (
    <main className="main">
      <Wrapper>
        <About />        
        <Advantages />
        <Button>Купить</Button>
      </Wrapper>
    </main>
  )
}

export { MainPage };