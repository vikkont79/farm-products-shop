import styled from 'styled-components';
import { Wrapper } from '@/shared/ui';
import { flexBetweenCenter } from '@/shared/styles';

const StyledHeader = styled.header``;

const HeaderWrapper = styled(Wrapper)`
  ${flexBetweenCenter}
  block-size: 80px;  
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`;

export { 
  StyledHeader,
  HeaderWrapper,
 };