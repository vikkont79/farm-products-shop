import { Wrapper } from '../../../../shared/ui';
import './style.css';

function About() {
  return (
    <section className="about">
      <Wrapper>
        <div className="about__info">
          <p className="about__title title title__big">Магазин фермерских продуктов с доставкой</p>
          <p className="about__text">
            Все продукты изготавливаются под заказ. Фермеры<br /> начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее<br /> и доставляем продукты максимально свежими.
          </p>
        </div>
        <div className="about__image"></div>
      </Wrapper>
    </section>
  )
}

export { About }