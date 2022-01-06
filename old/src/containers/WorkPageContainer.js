
import Head from 'next/head';
import { Flex, Box } from 'rebass';
import React, {
  Fragment,
  Component,
} from 'react';

import Navigation from 'components/Navigation';
import Section from 'components/Section';
import Content from 'components/Content';
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
              <Box width={3 / 4} p={[2, 3]} pl={[3, 4]}>
                <Content Doc={Doc} />
              </Box>
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
