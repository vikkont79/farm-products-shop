import { Tabs } from '../Tabs/Tabs';
import { CardImage, CardContent, CardLink, CardTitle, StyledCard } from './styles';
import { TitleSize } from '@/shared/ui';
import { Accordion } from '../Accordion/Accordion';
import { PageProvider, useProductCard } from '../../lib';
import { AppRoute } from '../../../../app/constants/routes';

function ProductCard({ selected, ...props }) {
  const { id, title, image, items, isPage } = useProductCard(props);
  
  return (
    <PageProvider isPage={isPage}>
      <StyledCard selected={selected} >
        <CardLink to={`${AppRoute.Product}/${id}`}>
          <CardImage src={image} alt={title} width={248} height={248} />
        </CardLink>
        <CardContent>
          <CardLink to={`${AppRoute.Product}/${id}`}>
            <CardTitle size={isPage ? TitleSize.BIG : TitleSize.SMALL}>{title}</CardTitle>
          </CardLink>
          {isPage ? <Accordion items={items} /> : <Tabs tabs={items} />}
        </CardContent>
      </StyledCard>
    </PageProvider>
  )
};

export { ProductCard };