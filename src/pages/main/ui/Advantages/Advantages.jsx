import { FeatureCard, Wrapper } from "@/shared/ui";
import './style.css';


function Advantages({ advantages }) {
  return (
    <section className="advantages">
      <Wrapper>
        <p className="advantages__intro title">Почему фермерские продукты лучше?</p>
        <ul className="advantages__list">  
          {advantages.map((item) => (
            <FeatureCard key={item.id} {...item} />
          ))}        
        </ul>
      </Wrapper>
    </section>
  )
};

export { Advantages };