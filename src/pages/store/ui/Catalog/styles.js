import styled from 'styled-components';
import { Title } from '@/shared/ui';
import { visuallyHidden } from '@/shared/styles/mixins/mixins';

const StyledCatalog = styled.div``;

const ProductsList = styled.ul`  
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style-type: none;  
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