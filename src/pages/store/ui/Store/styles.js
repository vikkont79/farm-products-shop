import styled from 'styled-components';
import { Title } from '@/shared/ui';
import { visuallyHidden, wrapper } from '@/shared/styles/mixins/mixins';

const StyledPage = styled.main`
  padding-block-start: 40px; 
  background-color: #f6f6f6; 
`;

const StoreSection = styled.section`
  ${wrapper}  
  display: grid;
  grid-template-columns: auto 1fr;  
  gap: 20px;  
`;

const HiddenTitle = styled(Title)`
  ${visuallyHidden}
`;

export {
  StyledPage,
  StoreSection,
  HiddenTitle,  
};