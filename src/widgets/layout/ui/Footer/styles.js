import styled from 'styled-components';
import { flexBetweenCenter, wrapper } from '@/shared/styles';


const StyledFooter = styled.footer``;

const FooterWrapper = styled.div`
  ${wrapper}
  ${flexBetweenCenter}
  block-size: 80px;   
`;

const Copyright = styled.span``;

export { 
  StyledFooter,
  FooterWrapper,
  Copyright
};