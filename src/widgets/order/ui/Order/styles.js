import styled from 'styled-components';
import { Title } from '@/shared/ui';
import { visuallyHidden } from '@/shared/styles/mixins/mixins';

const StyledForm = styled.form`
  min-inline-size: 353px;   
`;

const HiddenTitle = styled(Title)`
  ${visuallyHidden}
`;

export {
  StyledForm,
  HiddenTitle,
};