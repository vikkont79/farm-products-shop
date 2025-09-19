import styled from 'styled-components';
import { Title } from '@/shared/ui';
import { visuallyHidden } from '@/shared/styles/mixins/mixins';

const StyledForm = styled.form``;

const HiddenTitle = styled(Title)`
  ${visuallyHidden}
`;

export {
  StyledForm,
  HiddenTitle,
};