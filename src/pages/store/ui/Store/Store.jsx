import { OrderForm } from '@/widgets/order';
import { products } from '@/entities/products';
import {
  HiddenTitle,
  StoreSection,
  StyledPage
}
  from "./styles";
import { Catalog } from '../Catalog/Catalog';
import { useState } from 'react';

function StorePage() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const totalPrice = selectedProducts.reduce((sum, productId) => {
    const product = products.find((item) => item.id === productId)
    if (!product) return sum;
    const price = parseInt(product.description.price) || 0;

    return sum + (price || 0);
  }, 0);

  return (
    <StyledPage>
      <StoreSection>
        <HiddenTitle level={1}>Каталог товаров с формой заказа</HiddenTitle>
        <OrderForm
          products={products}
          formId="order"
          selectedProducts={selectedProducts}
          onSelectionChange={setSelectedProducts}
          price={totalPrice}
        />
        <Catalog products={products} selectedProducts={selectedProducts} />
      </StoreSection>
    </StyledPage >
  )
};

export { StorePage };