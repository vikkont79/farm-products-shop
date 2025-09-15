import styled from 'styled-components';
import { flexBetweenCenter, wrapper } from '@/shared/styles';

const StyledHeader = styled.header`
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`;

const HeaderNav = styled.nav`
  ${wrapper}
  ${flexBetweenCenter}
  block-size: 80px;    
`;

export { 
  StyledHeader,
  HeaderNav,
 };