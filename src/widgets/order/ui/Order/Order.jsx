import { useState } from 'react';
import { OrderDetails } from '../Details/Details';
import { OrderSelect } from '../Select/Select';
import { HiddenTitle, StyledForm } from './styles';

function OrderForm({ products, formId, selectedProducts, onSelectionChange, price }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(evt.target);
    formData.append('price', price)
       
    fetch("https://echo.htmlacademy.ru/", {
      method: "POST",
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        console.log('Форма успешно отправлена');
        alert(`Спасибо за заказ. Товары на сумму ${price} руб., будут доставлены в ближайшее время.`);
        evt.target.reset();
        onSelectionChange([]);
      } else {
        console.error('Ошибка при отправке формы:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Ошибка сети:', error);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };
  
  return (
    <StyledForm onSubmit={handleSubmit} id={`${formId}-form`}>
      <HiddenTitle level={2}>Форма заказа товаров</HiddenTitle>
      <OrderSelect
        products={products}
        onSelectionChange={onSelectionChange}
        selectedProducts={selectedProducts}
      />
      <OrderDetails formId={formId} price={price} disabled={isSubmitting} />
    </StyledForm>
  )
};

export { OrderForm };