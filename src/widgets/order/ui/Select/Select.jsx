import { HiddenTitle, ProductsList, Select, SelectTitle } from './styles';
import { Control } from '@/shared/ui';

function OrderSelect({ products }) {
  return products && products.length ? (
    <Select>
      <HiddenTitle>Блок выбора продуктов</HiddenTitle>
      <SelectTitle>Выберите продукты</SelectTitle>
      <ProductsList>
        {products.map((item) => (
          <Control
            key={item.id}
            type="checkbox"
            name={`product-${item.id}`}
            disabled={!item.inStock}
          >
            {item.title}
          </Control>
        ))}
      </ProductsList>
    </Select>
  ) : null;
};

export { OrderSelect };
