import styled from 'styled-components';

const StyledHeading = styled.div`
  width: 100%;
  text-align: left;
  background-color: #400951;
  color: #fff;
  padding: 1rem;
  border-radius: 5px 5px 0 0;
  & h2 {
    margin: 0;
  }
`;
const CardHeading = ({ className, children }) => {
  return <StyledHeading className={className}>{children}</StyledHeading>;
};

export default CardHeading;
