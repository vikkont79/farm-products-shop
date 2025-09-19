import styled from 'styled-components';
import { Title } from '@/shared/ui';

const StyledCard = styled.article`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

const CardImage = styled.img`
  display: block;
`;

const CardInfo = styled.div``;

const CardTitle = styled(Title)`
  margin-block-end: 16px;
`;

export {
  StyledCard,
  CardImage,
  CardInfo,
  CardTitle,
}