import { OrderForm } from '@/widgets/order';
import { products } from '../../model';
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
  console.log('Selected:', selectedProducts);

  const totalPrice = selectedProducts.reduce((sum, productId) => {
    const product = products.find((item) => item.id === productId)
    if(!product) return sum;
    const price = parseInt(product.description.price) || 0;

    return sum + (price || 0);
  }, 0);
  console.log(`Общая сумма: ${totalPrice} руб.`);

  return (
    <StyledPage>
      <StoreSection>
        <HiddenTitle level={1}>Каталог товаров с формой заказа</HiddenTitle>
        <OrderForm
          products={products}
          formId="order"
          onSelectionChange={setSelectedProducts}
          price={totalPrice}
        />
        <Catalog products={products} selectedProducts={selectedProducts} />
      </StoreSection>
    </StyledPage >
  )
};

export { StorePage };