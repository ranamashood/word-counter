import { styled } from "styled-components";

const Header = () => {
  return <Container>Word Counter</Container>;
};

const Container = styled.div`
  padding: 30px 0;
  font-size: ${(props) => props.theme.fontSize.large};
`;

export default Header;
