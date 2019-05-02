import React from 'react';
import Head from 'next/head';
import withGA from 'next-ga';
import Router from 'next/router';
import App, { Container } from 'next/app';

import { GlobalStyle } from 'styles/global';

const GA_ID = 'UA-99002751-2';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <React.Fragment>
          <GlobalStyle />
          <Head>
            <title>Jason Mandel</title>
          </Head>
          <Component {...pageProps} />
        </React.Fragment>
      </Container>
    );
  }
}

export default withGA(GA_ID, Router)(MyApp);
