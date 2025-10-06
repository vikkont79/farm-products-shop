import { HiddenTitle, ProductItem, ProductsList, Select, SelectTitle } from './styles';
import { Control } from '@/shared/ui';

function OrderSelect({ products, onSelectionChange, selectedProducts }) {
  const handleCheckboxChange = (productId, isChecked) => {
    onSelectionChange(prev => {
      const newSelection = isChecked
        ? [...prev, productId]
        : prev.filter(id => id !== productId);
      return newSelection;
    });
  };

  return products && products.length ? (
    <Select>
      <HiddenTitle>Блок выбора продуктов</HiddenTitle>
      <SelectTitle>Выберите продукты</SelectTitle>
      <ProductsList>
        {products.map((item) => (
          <ProductItem key={item.id}>
            <Control
              type="checkbox"
              name={`product-${item.id}`}
              disabled={!item.inStock}
              checked={selectedProducts.includes(item.id)}
              onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
            >
              {item.title}
            </Control>
          </ProductItem>
        ))}
      </ProductsList>
    </Select>
  ) : null;
};

export { OrderSelect };
