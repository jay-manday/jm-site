
import Head from 'next/head';
import { Flex } from 'rebass';
import React, {
  Fragment,
  Component,
} from 'react';

import Navigation from 'components/Navigation';
import Section from 'components/Section';
import Content from 'components/content';
import Colophon from 'components/Colophon';

import {
  Fade,
  HomeWrapper,
} from '../components/HomePage/HomePage.styled';
import { findPost } from '../content';

class WorkPageContainer extends Component {
  static async getInitialProps(props) {
    return { id: props.query };
  }

  render() {
    const { id } = this.props;
    const { Doc, title } = findPost(id);

    const data = [
      { id: 1, name: 'about' },
      { id: 2, name: 'work' },
      { id: 3, name: 'colophon' },
    ];

    return (
      <Fragment>
        <Head>
          <title>{title || ''}</title>
        </Head>
        <HomeWrapper>
          <Fade delay="1s">
            <Navigation data={data} />
          </Fade>
          <Fade delay="1s">
            <Flex wrap="true">
              <Section title="work" />
              <Content Doc={Doc} />
            </Flex>
          </Fade>
          <Fade delay="1s">
            <Flex wrap="true">
              <Section title="colophon" />
              <Colophon />
            </Flex>
          </Fade>
        </HomeWrapper>
      </Fragment>
    );
  }
}

export default WorkPageContainer;
