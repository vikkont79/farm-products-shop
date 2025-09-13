import { Wrapper } from '@/shared/ui';
import { TitleSize } from '@/shared/ui';
import { 
  AboutText, 
  StyledAbout,
  AboutTitle, 
  AboutInfo,
  AboutImage,
  HiddenTitle
} from './styles';

function About() {
  return (
    <StyledAbout>
      <Wrapper>
        <HiddenTitle level={1}>Магазин фермерских продуктов</HiddenTitle>
        <AboutInfo>          
          <AboutTitle size={TitleSize.BIG}>Магазин фермерских продуктов с доставкой</AboutTitle>
          <AboutText>
            Все продукты изготавливаются под заказ. Фермеры<br /> начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее<br /> и доставляем продукты максимально свежими.
          </AboutText>
        </AboutInfo>
        <AboutImage />
      </Wrapper>
    </StyledAbout>
  )
};

export { About };