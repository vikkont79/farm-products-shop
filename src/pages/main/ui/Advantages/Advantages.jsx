import { FeatureCard, Wrapper } from "@/shared/ui";
import { Title } from '@/shared/ui';
import './style.css';
import styled from "styled-components";

const AdvantagesIntro = styled(Title)`
  margin-block: 0 64px;
`;

function Advantages({ advantages }) {
  return (
    <section className="advantages">
      <Wrapper>
        <AdvantagesIntro>Почему фермерские продукты лучше?</AdvantagesIntro>
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