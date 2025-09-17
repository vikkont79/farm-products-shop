import { ControlInput, ControlLabel, StyledControl } from "./styles";

function Control({ children, type, name, disabled }) {
  return (
    <StyledControl>
      <ControlLabel>        
        {children}
        <ControlInput type={type} name={name} disabled={disabled} />
      </ControlLabel>
    </StyledControl>
  )
};

export { Control };