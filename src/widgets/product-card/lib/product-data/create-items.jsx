import { Description, Specifications, Properties } from '../../ui';

const createItems = (productData) => {
  const { description, specifications, properties } = productData;
  return [
    {
      key: 'description',
      title: description.title,
      content: <Description description={description} />,
    },
    {
      key: 'specifications',
      title: specifications.title,
      content: <Specifications specifications={specifications} />,
    },
    {
      key: 'properties',
      title: properties.title,
      content: <Properties properties={properties} />,
    },
  ].filter(Boolean);
};

export { createItems };