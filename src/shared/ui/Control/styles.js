import styled from 'styled-components';
import { flexBetweenCenter, leftCheckboxFlex } from '@/shared/styles';
import Check from '@/assets/images/check.svg';

const ControlLabel = styled.label`
  ${(props) => props.$reverse ? leftCheckboxFlex : flexBetweenCenter}
  padding-block: 15px 14px;

  &:has(input:hover) {
    color: #FC7427
  }

  &:has(input[disabled]) {
    opacity: 0.5;
  }
`;

const ControlInput = styled.input`
  appearance: none;
  position: relative;
  inline-size: 24px;
  block-size: 24px;
  margin: 0;
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

  &:disabled {
    background-color: #ccc;    
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
  ControlLabel,
  ControlInput,
}
