import { Field, Label } from './styles';

function Input({ children, type, formId, name, hidden }) {
  return (
    <>
      <Label
      htmlFor={`${formId}-form-${name}`}
      $hidden={hidden}
      >
        {children}
      </Label>
      <Field
        type={type}
        name={`${formId}-${name}`}
        id={`${formId}-form-${name}`}
        placeholder={`Введите ${children}`}
        required
      />
    </>
  )
};

export { Input };