import { FeatureCard, Wrapper } from "@/shared/ui";
import {
  StyledAdvantages,
  AdvantagesIntro,
  AdvantagesList,
  HiddenTitle
} from "./styles";



function Advantages({ advantages }) {
  return (
    <StyledAdvantages>
      <Wrapper>
        <HiddenTitle level={2}>Сравнение продуктов</HiddenTitle>
        <AdvantagesIntro>Почему фермерские продукты лучше?</AdvantagesIntro>
        <AdvantagesList>
          {advantages.map((item) => (
            <FeatureCard key={item.id} {...item} />
          ))}
        </AdvantagesList>
      </Wrapper>
    </StyledAdvantages>
  )
};

export { Advantages };