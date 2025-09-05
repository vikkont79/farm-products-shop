import { StyledWrapper } from "./styles";

function Wrapper({ children }) {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
};

export { Wrapper };