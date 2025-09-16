import styled from 'styled-components';
import { flexBetweenCenter } from '@/shared/styles';
import Check from '@/assets/images/check.svg';

const StyledControl = styled.li` 
  text-align: start;
`;

const ControlLabel = styled.label`
  ${flexBetweenCenter}
  padding-block: 15px 14px;
`;

const ControlInput = styled.input`
  appearance: none;
  position: relative;
  inline-size: 24px;
  block-size: 24px;
  background-color: #f6f6f6;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 100ms;

  &[type="radio"] {
    border-radius: 50%;
  }

  &:hover,
  &:active {
    border-radius: 10%;
    border: 2px solid #FC7427;     
  }

  &:focus-within {
    border: none;
    outline: 3px solid #FC7427; 
  }

  &::after {
    position: absolute;
    content: "";
    inline-size: 0;
    block-size: 0;
    background-image: url(${Check});
    background-repeat: no-repeat;
    transition: 100ms;
  }

  &:checked::after {
    inline-size: 24px;
    block-size: 24px;
    transition: 100ms;  
  }
`;

export {
  StyledControl,
  ControlLabel,
  ControlInput,
}
