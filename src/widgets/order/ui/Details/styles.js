import styled from 'styled-components';
import { visuallyHidden } from '@/shared/styles/mixins/mixins';

const Details = styled.fieldset`   
  margin-inline: 0;
  margin-block-end: 40px;
  padding: 0;
  padding-block: 24px 20px;
  padding-inline: 20px;
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

const DetailsTitle = styled.p` 
  margin-block: 0 24px;  
  font-weight: 700;
  text-align: start;
`;

const StyledInput = styled.div`  
  margin-block-end: 20px;
`;

const Price = styled.p`
  display:flex;
  flex-direction: column;
  margin-block-end: 32px;
  font-size: 14px;
  text-align: start;
`;

const PriceValue = styled.span`
  padding-block-start: 8px;
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
`;

export {
  Details,
  HiddenTitle,
  DetailsTitle,
  StyledInput,
  Price,
  PriceValue,
};