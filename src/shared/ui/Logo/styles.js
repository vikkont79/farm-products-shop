import styled from 'styled-components';
import Logo from '@assets/images/farmer-logo.svg?react';
import { Link } from 'react-router-dom';

const LogoLink = styled(Link)`
  display: flex;
  block-size: 44px;
  align-items: center;
  color: inherit;
  text-decoration: none;
`;

const LogoImg = styled(Logo)`
  inline-size: 44px;
  block-size: auto;
`;

const LogoText = styled.span`
  margin-inline-start: 24px;  
  font-size: 28px;
  line-height: 1.15;
  font-weight: 700;
`;

export { LogoLink, LogoImg, LogoText };