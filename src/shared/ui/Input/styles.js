import styled from 'styled-components';
import { visuallyHidden } from '@/shared/styles/mixins/mixins';

const Label = styled.label`
  ${({ $hidden }) => $hidden && visuallyHidden }
`;

const Field = styled.input`
  min-inline-size: 100%;
  padding: 12px 13px;
  border: 1px solid #0000001A;
  background-color: #F6F6F6;
  color: inherit;
  font-family: inherit;
  font-size: 14px 
`;

export {
  Label,
  Field,
}