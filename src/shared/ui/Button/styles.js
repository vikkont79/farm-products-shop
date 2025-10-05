import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled(Link)`
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
  &:active,
  &:focus-visible {
    background-color: #FC7427; 
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
  }

  &:active,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;

export { StyledButton };