import styled from 'styled-components';
import { Title } from '@/shared/ui';

const StyledCard = styled.article`
  display: flex;
  padding: 20px;
  gap: 20px;
  ${props => props.selected && `
    outline: 3px solid #FC7427;
    outline-offset: -3px;
  `}
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
  min-inline-size: ${(props) => (props.theme.isPage ? "300px" : "248px")};
`;

const CardContent = styled.div`
 text-align: start;
 font-size: ${(props) => (props.theme.isPage ? "18px" :  "14px")};
`;

const CardTitle = styled(Title)`
  margin-block-end: 0;
  padding-block-end: 16px;
`;

export {
  StyledCard,
  CardLink,
  CardImage,
  CardContent,
  CardTitle,
}