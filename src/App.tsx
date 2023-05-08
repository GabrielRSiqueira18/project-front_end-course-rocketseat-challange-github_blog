import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes/Router";
import { GithubReposProvider } from "./contexts/GithubReposContext";

export function App() {
 return (
    <ThemeProvider theme={defaultTheme}>
      <GithubReposProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GithubReposProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

