import { StyledTitle } from './styles';

function Title({ children, level, size, className }) {
  return (
    <StyledTitle
      $size={size}
      {...(level && { as: `h${level}` })}
      className={className}
    >
      {children}
    </StyledTitle>
  )
};

export { Title };