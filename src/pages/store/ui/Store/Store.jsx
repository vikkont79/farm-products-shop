import { OrderForm } from '@/widgets/order';
import { products } from '../../model';
import {
  HiddenTitle,
  StoreSection,
  StyledPage
}
  from "./styles";
import { Catalog } from '../Catalog/Catalog';

function StorePage() {
  return (
    <StyledPage>
      <StoreSection>
        <HiddenTitle level={1}>Каталог товаров с формой заказа</HiddenTitle>
        <OrderForm products={products} formId="order" />
        <Catalog products={products} />
      </StoreSection>
    </StyledPage >
  )
};

export { StorePage };