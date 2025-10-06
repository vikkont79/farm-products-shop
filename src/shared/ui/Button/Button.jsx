import { StyledButton } from './styles';

function Button({ children, minInlineSize, link, className, type, disabled }) {
  return (
    <StyledButton
      $minInlineSize={minInlineSize}
      {...(link ? { to: link } : { as: "button", type: type || "button" })}
      className={className}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
};

export { Button };