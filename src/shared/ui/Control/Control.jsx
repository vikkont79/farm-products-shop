import { ControlInput, ControlLabel, StyledControl } from "./styles";

function Control({ children, type, name }) {
  return (
    <StyledControl>
      <ControlLabel>        
        {children}
        <ControlInput type={type} name={name}/>
      </ControlLabel>
    </StyledControl>
  )
};

export { Control };