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

const wrapper = css`
  margin-inline: max(90px, (100% - 1100px) / 2);
`;

export {
  flexBetweenCenter,
  visuallyHidden,
  wrapper,
};