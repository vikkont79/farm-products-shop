import { ProductCard } from '@/shared/ui';
import { HiddenTitle, ProductItem, ProductsList, StyledCatalog } from './styles';
import { images } from '../../model/images';

function Catalog({ products }) {
  return products && products.length ? (
    <StyledCatalog>
      <HiddenTitle level={2}>Каталог товаров</HiddenTitle>
      <ProductsList>
        {products.map((item) => (
          <ProductItem key={item.id}>
            <ProductCard {...item} image={images[`product${item.id}`]} />
          </ProductItem>
        ))}
      </ProductsList>
    </StyledCatalog>
  ) : null;
};

export { Catalog };