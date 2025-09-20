import styled from 'styled-components';
import { Title } from '@/shared/ui';
import { visuallyHidden } from '@/shared/styles/mixins/mixins';

const StyledCatalog = styled.div`
  block-size: 0;
  min-block-size: 100%;
  overflow: hidden;
`;

const ProductsList = styled.ul`
  max-block-size: 100%;  
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow-y: auto;  
`;

const HiddenTitle = styled(Title)`
  ${visuallyHidden}
`;

const ProductItem = styled.li`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--color-bg-primary);  
`;

export {
  StyledCatalog,
  ProductsList,
  HiddenTitle,
  ProductItem,
};