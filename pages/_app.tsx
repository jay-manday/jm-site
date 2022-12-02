import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  height: 100%;
  width: 100%;
}

body {
  color: #fefefe;
  background-color: #000;
  font-family: 'Inter', 'Roboto', 'Lato', sans-serif;
  font-size: 1.6rem;
  padding: 0;
  margin: 0;
}

.root {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}

#__next { height: 100%; }

* { box-sizing: border-box; }

a { text-decoration: none; }

a:link, a:visited, a:active {
  color: inherit;
}
`;

const theme = {
  colors: {
    blue: '#0000ee',
    red: '#f00',
    white: '#fff',
  },
  font: {
    size: {
      small: '16px',
      medium: '32px',
    },
    weight: { 
      normal: 500,
    }
  },
  transition: {
    normal: '0.5s',
    slow: '1s',
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
