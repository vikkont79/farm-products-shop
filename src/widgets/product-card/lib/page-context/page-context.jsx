import { createContext } from 'react';
import { ThemeProvider } from 'styled-components';

const PageContext = createContext();

const PageProvider = ({ children, isPage }) => {
  const theme = { isPage }
  return (
    <PageContext.Provider value={isPage}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </PageContext.Provider>
  );
};

export { PageProvider, PageContext };