/* eslint-disable no-irregular-whitespace */
import { Wrapper } from "../../../../shared/ui";
import './style.css';

function Advantages() {
  return (
    <section className="advantages">
      <Wrapper>
        <p className="advantages__intro title">Почему фермерские продукты лучше?</p>
        <ul className="advantages__list">
          <li className="advantages__item advantages__item--eat advantages__item--farm">
            <span className="advantages__label">Фермерские продукты</span>
            <p className="advantages__title">Еда намного вкуснее</p>
            <p className="advantages__description">Домашняя колбаса из мяса, соли и специй и колбаса<br/> из магазина — два настолько разных продукта,<br/> что они даже не родственники</p>
          </li>
          <li className="advantages__item advantages__item--garbage">
            <span className="advantages__label">Магазинные продукты</span>
            <p className="advantages__title">Просроченные продукты</p>
            <p className="advantages__description">Из-за большого количество товара сотрудники<br/> магазинов не успевают своевременно производить<br/> замену товара</p>
          </li>
          <li className="advantages__item advantages__item--sprout advantages__item--farm">
            <p className="advantages__label">Фермерские продукты</p>
            <p className="advantages__title">Натуральные продукты</p>
            <p className="advantages__description">Поставляем местные органические продукты<br/> выращенные без пестицидов и химических удобрений.</p>
          </li>          
          <li className="advantages__item advantages__item--no-meat">
            <span className="advantages__label">Магазинные продукты</span>
            <p className="advantages__title">Некачественное мясо</p>
            <p className="advantages__description">Мясные полуфабрикаты, в которых содержится<br/> чрезмерно много натрия, вредных жиров,<br/> консервантов</p>
          </li>
        </ul>
      </Wrapper>
    </section>
  )
}

export { Advantages }