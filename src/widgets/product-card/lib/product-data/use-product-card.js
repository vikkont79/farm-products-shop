import { useMemo } from 'react';
import { createItems } from './create-items';

const useProductCard = (props) => {
  const { title, image, description, specifications, properties, isPage } = props;

  const items = useMemo(() => {
    return createItems({
    description,
    specifications,
    properties
    });
  }, [description, specifications, properties]);

  return {
    title,
    image,
    items,
    isPage,
  };
};

export { useProductCard };