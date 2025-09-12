import styled from 'styled-components';
import { Wrapper } from '@/shared/ui';
import { flexBetweenCenter } from '@/shared/styles';

const StyledFooter = styled.footer``;

const FooterWrapper = styled(Wrapper)`
  ${flexBetweenCenter}
  block-size: 80px;   
`;

const Copyright = styled.span``;

export { 
  StyledFooter,
  FooterWrapper,
  Copyright
};