import React from 'react';
import App, { Container } from 'next/app'
import { createGlobalStyle } from 'styled-components';


export default class extends App {
  static async getInitialProps ({ Component, router, ctx, req }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const { Component, pageProps } = this.props;
    const GlobalStyle = createGlobalStyle`
      @import url('https://rsms.me/inter/inter.css');
      body {
        margin: 0px;
        background: #000;
        font-family: 'Inter-vjsarsndg, Inter', sans-serif;
        font: 12px;
      }
    `;

    return (
      <Container>
        <GlobalStyle />
        <Component {...Object.assign(pageProps)} />
      </Container>
    )
  }
}
