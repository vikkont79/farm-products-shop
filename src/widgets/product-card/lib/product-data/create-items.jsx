import { Description, Specifications, Properties } from '../../ui';

const createItems = (productData) => {
  const { description, specifications, properties } = productData;
  return [
    {
      key: 'description',
      title: description.title,
      content: <Description {...description} />,
    },
    {
      key: 'specifications',
      title: specifications.title,
      content: <Specifications {...specifications} />,
    },
    {
      key: 'properties',
      title: properties.title,
      content: <Properties {...properties} />,
    },
  ].filter(Boolean);
};

export { createItems };