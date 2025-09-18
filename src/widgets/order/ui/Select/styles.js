import styled from 'styled-components';
import { visuallyHidden } from '@/shared/styles/mixins/mixins';

const Select = styled.fieldset`
  margin-inline: 0;
  margin-block-end: 18px;
  padding: 0;
  padding-block: 24px 4px;
  border: none;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--color-bg-primary);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
              0px 2px 6px 0px rgba(0, 0, 0, 0.04),
              0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`;

const HiddenTitle = styled.legend`
  ${visuallyHidden}
`;

const SelectTitle = styled.p`
  margin-block: 0 12px;
  padding-inline-start: 20px;
  font-weight: 700;
  text-align: start;
`;

const ProductsList = styled.ul`
  margin: 0;
  padding-inline: 20px 16px;
  padding-block-end: 8px;
  border-block-end: 1px solid rgba(0, 0, 0, 0.1);
  list-style-type: none;
`;

const ProductItem = styled.li``;

export {
  Select,
  HiddenTitle,
  SelectTitle,
  ProductsList,
  ProductItem,
};