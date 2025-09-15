import styled from 'styled-components';

const Details = styled.fieldset`  
  padding-inline-start: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
   background-color: var(--color-bg-primary);
`;

const DetailsTitle = styled.legend` 
  padding-inline: 0;
  font-weight: 700;
  text-align: start;
`;

export {
  Details,
  DetailsTitle,
};