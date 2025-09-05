import styled from 'styled-components';

const StyledTitle = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 700;  
  line-height: 1.15;
  ${(props) => {
    switch (props.$size) {
      case 'big':
        return `
				  font-size: 44px
				`;
      case 'small':
        return `
				  font-size: 24px
				`;
      default:
        return `
				  font-size: 36px
				`;
    }
  }}
`;

export { StyledTitle };