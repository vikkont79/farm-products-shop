import { Wrapper } from '@/shared/ui';
import './style.css';
import { Title, TitleSize } from '@/shared/ui';
import styled from 'styled-components';

const AboutTitle = styled(Title)`
  margin-block-end: 24px;
`

function About() {
  return (
    <section className="about">
      <Wrapper>
        <div className="about__info">          
          <AboutTitle size={TitleSize.BIG}>Магазин фермерских продуктов с доставкой</AboutTitle>
          <p className="about__text">
            Все продукты изготавливаются под заказ. Фермеры<br /> начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее<br /> и доставляем продукты максимально свежими.
          </p>
        </div>
        <div className="about__image"></div>
      </Wrapper>
    </section>
  )
};

export { About };