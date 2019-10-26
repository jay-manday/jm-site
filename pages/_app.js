import React from 'react'
import Head from 'next/head'
// import Router from 'next/router'

import App, { Container } from 'next/app'
import { GlobalStyle } from '../src/styles/global'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const getInitialProps = Component.getInitialProps
    return { p: { ...(getInitialProps ? await getInitialProps(ctx) : {}) } }
  }

  render() {
    const { Component, p } = this.props
    return (
      <Container>
        <React.Fragment>
          <GlobalStyle />
          <Head>
            <title>Jason Mandel</title>
          </Head>
          <Component {...p} />
        </React.Fragment>
      </Container>
    )
  }
}

export default MyApp
