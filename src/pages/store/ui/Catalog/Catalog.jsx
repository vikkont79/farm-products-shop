import { ProductCard } from '@/widgets/product-card';
import { HiddenTitle, ProductItem, ProductsList, StyledCatalog } from './styles';
import { images } from '@/entities/products';
import { useRef } from 'react';
import { useEffect } from 'react';

function Catalog({ products, selectedProducts }) {
  const productRefs = useRef({});
  const catalogRef = useRef(null);
  const lastSelectedId = selectedProducts[selectedProducts.length - 1];

  useEffect(() => {
    if (lastSelectedId && catalogRef.current) {
      const productElement = productRefs.current[lastSelectedId];
      const catalogElement = catalogRef.current;
      if (productElement) {
        catalogElement.scrollTop = productElement.offsetTop - catalogElement.offsetTop;
      }
    }
  }, [lastSelectedId])

  return products && products.length ? (
    <StyledCatalog >
      <HiddenTitle level={2}>Каталог товаров</HiddenTitle>
      <ProductsList ref={catalogRef}>
        {products.map((item) => (
          <ProductItem
            key={item.id}
            ref={(el) => productRefs.current[item.id] = el}>
            <ProductCard {...item} image={images[`product${item.id}`]} selected={item.id === lastSelectedId} />
          </ProductItem>
        ))}
      </ProductsList>
    </StyledCatalog>
  ) : null;
};

export { Catalog };