import { ProductSection, StyledPage } from './styles';
import { ProductCard } from '@/widgets/product-card';
import { products, images } from '@/pages/store'

function ProductPage() {
  return (
    <StyledPage>
      <ProductSection>
        <ProductCard {...products[0]} image={images.product1} />
      </ProductSection>
    </StyledPage>
  )
};

export { ProductPage };