import { css } from 'styled-components';

const flexBetweenCenter = css`
  display: flex;  
  justify-content: space-between;
  align-items: center;
`;

const visuallyHidden = css`
  position: absolute;
  scale: 0;
`;

export {
  flexBetweenCenter,
  visuallyHidden,
};