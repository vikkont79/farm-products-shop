import styled from 'styled-components';
import { Title } from '@/shared/ui';

const StyledCard = styled.article`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

const CardLink = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    opacity: 0.5;
  }

  &:focus-visible {
    outline: none;
  }
`;

const CardImage = styled.img`
  display: block;
`;

const CardInfo = styled.div`
 text-align: start;
 font-size: 14px;
`;

const CardTitle = styled(Title)`
  margin-block-end: 0;
  padding-block-end: 16px;
`;

export {
  StyledCard,
  CardLink,
  CardImage,
  CardInfo,
  CardTitle,
}