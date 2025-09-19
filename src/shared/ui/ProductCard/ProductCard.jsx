import { Tabs } from '../Tabs/Tabs';
import { CardImage, CardInfo, CardTitle, StyledCard } from './styles';
import { TitleSize } from '@/shared/ui';

function ProductCard({ title, image, description, specifications, properties }) {
  

  return (
    <StyledCard>
      <CardImage src={image} alt={title} width={248} height={248} />
      <CardInfo>
        <CardTitle size={TitleSize.SMALL}>{title}</CardTitle>
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