import React, { useEffect } from "react";
import styled from "styled-components";
import AddBookForm from "./Components/AddBookForm/AddBookForm";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./themes/GlobalStyle";
import theme from "./themes/mainTheme";
import Navigation from "./Components/Navigation/Navigation";
import BooksList from "./Components/BooksList/BooksList";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

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
  const client = new ApolloClient({
    uri: "http://localhost:5001/personal-books-library/us-central1/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Wrapper>
            <LeftWrapper>
              <Navigation />
              <AddBookForm></AddBookForm>
            </LeftWrapper>
            <BooksList />
          </Wrapper>
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
