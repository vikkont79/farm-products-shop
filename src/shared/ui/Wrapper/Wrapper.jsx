import { StyledWrapper } from "./styles";

function Wrapper({ children, className }) {
  return (
    <StyledWrapper className={className}>
      {children}
    </StyledWrapper>
  )
};

export { Wrapper };