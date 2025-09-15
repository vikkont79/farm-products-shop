import styled from 'styled-components';
import { Title } from '@/shared/ui';
import { visuallyHidden } from '@/shared/styles/mixins/mixins';
import { wrapper } from '@/shared/styles/mixins/mixins';

const StyledAdvantages = styled.section`
  ${wrapper}
   padding-block: 100px 64px;
`;

const HiddenTitle = styled(Title)`
  ${visuallyHidden}
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
  HiddenTitle,
  AdvantagesIntro,
  AdvantagesList,
}