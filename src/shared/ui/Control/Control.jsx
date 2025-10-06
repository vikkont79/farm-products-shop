import { ControlInput, ControlLabel } from "./styles";

function Control({ children, type, name, disabled, checked, reverse, onChange }) {
  return (
    <ControlLabel $reverse={reverse}>
      {children}
      <ControlInput
        type={type}
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
    </ControlLabel>
  )
};

export { Control };