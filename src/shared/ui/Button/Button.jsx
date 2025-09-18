import { StyledButton } from './styles';

function Button({ children, minInlineSize, link, className, type }) {
  return (
    <StyledButton
      $minInlineSize={minInlineSize}
      {...(link ? { href: link } : { as: "button", type: type || "button" })}
      className={className}
    >
      {children}
    </StyledButton>
  )
};

export { Button };