import { Tabs } from '../Tabs/Tabs';
import { CardImage, CardInfo, CardLink, CardTitle, StyledCard } from './styles';
import { TitleSize } from '@/shared/ui';

function ProductCard({ title, image, description, specifications, properties }) {


  return (
    <StyledCard>
      <CardLink href='#'>
        <CardImage src={image} alt={title} width={248} height={248} />
      </CardLink>
      <CardInfo>
        <CardLink href='#'>
          <CardTitle size={TitleSize.SMALL}>{title}</CardTitle>
        </CardLink>
        <Tabs
          description={description}
          specifications={specifications}
          properties={properties}
        />
      </CardInfo>
    </StyledCard>
  )
};

export { ProductCard };