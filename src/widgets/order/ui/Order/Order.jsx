import { OrderDetails } from '../Details/Details';
import { OrderSelect } from '../Select/Select';
import { HiddenTitle, StyledForm } from './styles';

function OrderForm({ products, formId, onSelectionChange, price }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    formData.append('price', price)
    for(const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    fetch("https://echo.htmlacademy.ru/", {
      method: "POST",
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        console.log('Форма успешно отправлена');
      } else {
        console.error('Ошибка при отправке формы:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Ошибка сети:', error);
    });
  };
  
  return (
    <StyledForm onSubmit={handleSubmit} id={`${formId}-form`}>
      <HiddenTitle level={2}>Форма заказа товаров</HiddenTitle>
      <OrderSelect
        products={products}
        onSelectionChange={onSelectionChange}
      />
      <OrderDetails formId={formId} price={price} />
    </StyledForm>
  )
};

export { OrderForm };