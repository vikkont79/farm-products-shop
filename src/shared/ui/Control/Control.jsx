import { ControlInput, ControlLabel } from "./styles";

function Control({ children, type, name, disabled, reverse, onChange }) {
  return (
    <ControlLabel $reverse={reverse}>
      {children}
      <ControlInput
        type={type}
        name={name}
        disabled={disabled}
        onChange={onChange}
      />
    </ControlLabel>
  )
};

export { Control };