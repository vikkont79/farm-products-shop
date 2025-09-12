import styled from 'styled-components';
import { Title } from '@/shared/ui';

const StyledAdvantages = styled.section`
   padding-block: 100px 64px;
`;

const AdvantagesIntro = styled(Title)`
  margin-block: 0 64px;
`;

const AdvantagesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export {
  StyledAdvantages,
  AdvantagesIntro,
  AdvantagesList,
}