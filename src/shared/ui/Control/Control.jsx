import { ControlInput, ControlLabel } from "./styles";

function Control({ children, type, name, disabled }) {
  return (    
      <ControlLabel>        
        {children}
        <ControlInput type={type} name={name} disabled={disabled} />
      </ControlLabel>    
  )
};

export { Control };