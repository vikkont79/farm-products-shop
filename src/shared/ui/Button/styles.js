import styled from "styled-components";

const StyledButton = styled.a`
  display: inline-block; 
  min-inline-size: ${(props) => props.$minInlineSize ? `${props.$minInlineSize}px` : "100%"};
  padding-inline: 12px;
  padding-block: 16px;
  border: none;
  background-color: var(--color-button-primary);
  color: #ffffff;
  font-family: inherit;
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #FC7427; 
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
  }

  &:active {
    box-shadow: none;
  }
`;

export { StyledButton };