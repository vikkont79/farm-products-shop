import { StyledButton } from './styles';

function Button({ children, minInlineSize, link, className }) {
  return (
    <StyledButton
      $minInlineSize={minInlineSize}
      {...(link ? { href: link } : { as: "button", type: "button" })}
      className={className}
    >
      {children}
    </StyledButton>
  )
};

export { Button };