import { ThemeProvider, styled } from "styled-components";
import Content from "./components/layout/Content";
import Header from "./components/layout/Header";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Content />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fontFamily};
  padding: 20px 0;
`;

export default App;
