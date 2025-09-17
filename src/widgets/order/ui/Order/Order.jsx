import { OrderDetails } from '../Details/Details';
import { OrderSelect } from '../Select/Select';
import { StyledForm } from './styles';

function OrderForm({ products }) {
  return (
    <StyledForm action="https://echo.htmlacademy.ru/" method="get" id="order-form">
      <OrderSelect products={products} />
      <OrderDetails />
    </StyledForm>
  )
};

export { OrderForm };