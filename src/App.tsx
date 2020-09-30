import React from "react";
import styled from "styled-components";
import AddBookForm from "./Components/AddBookForm/AddBookForm";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./themes/GlobalStyle";
import theme from "./themes/mainTheme";
import Navigation from "./Components/Navigation/Navigation";
import BooksList from "./Components/BooksList/BooksList";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <LeftWrapper>
            <Navigation />
            <AddBookForm></AddBookForm>
          </LeftWrapper>
          <BooksList />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
