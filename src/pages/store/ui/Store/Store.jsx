import { OrderForm } from '@/widgets/order';
import { products }  from '../../model';
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
          <OrderForm products={products} />
          <Catalog />
      </StoreSection>
    </StyledPage >
  )
};

export { StorePage };