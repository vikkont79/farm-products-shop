import styled from 'styled-components';
import { wrapper } from '@/shared/styles/mixins/mixins';

const StyledPage = styled.main`
  padding-block-start: 40px; 
  background-color: #f6f6f6; 
`;

const ProductSection = styled.section`
  ${wrapper}  
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--color-bg-primary);
`;

export {
  StyledPage,
  ProductSection,
}