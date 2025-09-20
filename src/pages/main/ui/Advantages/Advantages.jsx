import { FeatureCard } from '@/widgets/feature-card';
import {
  StyledAdvantages,
  AdvantagesIntro,
  AdvantagesList,
  HiddenTitle
} from './styles';



function Advantages({ advantages }) {
  return advantages && advantages.length ? (
    <StyledAdvantages>      
        <HiddenTitle level={2}>Сравнение продуктов</HiddenTitle>
        <AdvantagesIntro>Почему фермерские продукты лучше?</AdvantagesIntro>
        <AdvantagesList>
          {advantages.map((item) => (
            <FeatureCard key={item.id} {...item} />
          ))}
        </AdvantagesList>      
    </StyledAdvantages>
  ) : null;
};

export { Advantages };