import { OrderDetails } from '../Details/Details';
import { OrderSelect } from '../Select/Select';
import { HiddenTitle, StyledForm } from './styles';

function OrderForm({ products, formId }) {
  return (
    <StyledForm action="https://echo.htmlacademy.ru/" method="get" id={`${formId}-form`}>
      <HiddenTitle level={2}>Форма заказа товаров</HiddenTitle>
      <OrderSelect products={products} />
      <OrderDetails formId={formId} />
    </StyledForm>
  )
};

export { OrderForm };