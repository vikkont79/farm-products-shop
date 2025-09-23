import { Tabs } from '../Tabs/Tabs';
import { CardImage, CardContent, CardLink, CardTitle, StyledCard } from './styles';
import { TitleSize } from '@/shared/ui';

function ProductCard({ title, image, description, specifications, properties }) {


  return (
    <StyledCard>
      <CardLink href='#'>
        <CardImage src={image} alt={title} width={248} height={248} />
      </CardLink>
      <CardContent>
        <CardLink href='#'>
          <CardTitle size={TitleSize.SMALL}>{title}</CardTitle>
        </CardLink>
        <Tabs
          description={description}
          specifications={specifications}
          properties={properties}
        />
      </CardContent>
    </StyledCard>
  )
};

export { ProductCard };