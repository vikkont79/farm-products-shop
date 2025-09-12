import styled from 'styled-components';

const LogoLink = styled.a`
  display: flex;
  block-size: 44px;
  align-items: center;
  color: inherit;
  text-decoration: none;
`;

const LogoText = styled.span`
  margin-inline-start: 24px;  
  font-size: 28px;
  line-height: 1.15;
  font-weight: 700;
`;

export { LogoLink, LogoText };