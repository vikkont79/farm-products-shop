import { OrderDetails } from '../Details/Details';
import { OrderSelect } from '../Select/Select';
import { StyledForm } from './styles';

function OrderForm() {
  return (
    <StyledForm action="https://echo.htmlacademy.ru/" method="get" id="order-form">
      <OrderSelect />
      <OrderDetails />
    </StyledForm>
  )
};

export { OrderForm };