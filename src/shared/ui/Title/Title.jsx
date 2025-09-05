import { StyledTitle } from './styles';

function Title({ children, size, className }) {
  return (
    <StyledTitle $size={size} className={className}>
      {children}
    </StyledTitle>
  )
};

export { Title };