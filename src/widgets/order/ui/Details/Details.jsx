import { Details, DetailsTitle, HiddenTitle, Price, PriceValue, StyledInput } from './styles';
import { Button, Input } from '@/shared/ui';

function OrderDetails({ formId }) {
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
        <PriceValue>1200 руб.</PriceValue>
      </Price>
      <Button minInlineSize={314} type="submit" >
        Купить
      </Button>
    </Details>
  )
};

export { OrderDetails };

