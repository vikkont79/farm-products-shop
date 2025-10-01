import { useMemo } from 'react';
import { createItems } from './create-items';
import { useState } from 'react';
import { useCallback } from 'react';

const useProductCard = (props) => {
  const { title, image, description, specifications, properties, isPage, inStock } = props;

  const [showAll, setShowAll] = useState(false);
  const handleShowAll = useCallback(() => {
  setShowAll(prev => !prev);
}, []);

  const items = useMemo(() => {
    return createItems({
    description: {
      ...description,
      text: showAll ? description.text : description.text.slice(0, 100) + '...',
      showAll,
      onShowAll: handleShowAll,
      inStock: inStock,
    },
    specifications,
    properties
    });
  }, [description, specifications, properties, showAll, handleShowAll, inStock]);

  return {
    title,
    image,
    items,
    isPage,
  };
};

export { useProductCard };