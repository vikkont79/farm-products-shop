import { ProductSection, StyledPage } from './styles';
import { ProductCard } from '@/widgets/product-card';
import { products, images } from '@/entities/products';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  const item = products.find((item) => item.id == id)
  
  return (
    <StyledPage>
      <ProductSection>
        <ProductCard {...item} image={images[`product${id}`]} isPage />
      </ProductSection>
    </StyledPage>
  )
};

export { ProductPage };