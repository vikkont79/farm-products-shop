import { css } from 'styled-components';

const flexBetweenCenter = css`
  display: flex;  
  justify-content: space-between;
  align-items: center;
`;

const leftCheckboxFlex = css`
 display: flex;
 flex-direction: row-reverse;
 justify-content: start;
 align-items: center;
 column-gap: 20px;
`;


const visuallyHidden = css`
  position: absolute;
  scale: 0;
`;

const wrapper = css`
  margin-inline: max(90px, (100% - 1100px) / 2);
`;

export {
  flexBetweenCenter,
  leftCheckboxFlex,
  visuallyHidden,
  wrapper,
};