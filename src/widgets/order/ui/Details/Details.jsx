import { Details, DetailsTitle, HiddenTitle, Price, PriceValue, StyledInput } from './styles';
import { Button, Input } from '@/shared/ui';

function OrderDetails({ formId, price, disabled }) {
  const isDisabled = disabled || price === 0;
  return (
    <Details>
      <HiddenTitle>Блок информации о заказе</HiddenTitle>
      <DetailsTitle>Сделать заказ</DetailsTitle>
      <StyledInput>
        <Input
          type="text"
          formId={formId}
          name="address"
          hidden
        >
          адрес доставки
        </Input>
      </StyledInput>
      <Price>
        Цена
        <PriceValue>{price === 0 ? `Корзина пуста` : `${price} руб.`}</PriceValue>
      </Price>
      <Button minInlineSize={314} type="submit" disabled={isDisabled} >
        Купить
      </Button>
    </Details>
  )
};

export { OrderDetails };

