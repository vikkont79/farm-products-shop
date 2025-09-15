import styled from 'styled-components';
import { wrapper } from '@/shared/styles/mixins/mixins';

const StyledPage = styled.main`
  padding-block-start: 40px; 
  background-color: #f6f6f6; 
`;

const StoreSection = styled.section`
  ${wrapper}
  display: flex;  
  gap: 20px;
`;

export {
  StyledPage,
  StoreSection,  
};