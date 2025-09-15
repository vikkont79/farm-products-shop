import { OrderForm } from '@/widgets/order';
import {
      
  StoreSection,  
  StyledPage
}
  from "./styles";
import { Catalog } from '../Catalog/Catalog';

function StorePage() {
  return (
    <StyledPage>
      <StoreSection>        
          <OrderForm/>
          <Catalog />
      </StoreSection>
    </StyledPage >
  )
};

export { StorePage };