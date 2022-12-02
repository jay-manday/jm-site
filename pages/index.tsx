import { Flex } from 'rebass';
import type { NextPage } from 'next'
import styled from 'styled-components';

import Navigation from '../src/components/Navigation';
import Section from '../src/components/Section';
import Colophon from '../src/components/Colophon';
import About from '../src/components/About';
import Work from '../src/components/Work';

import { Fade } from '../src/components/Base/styles';
import { useWindowDimensions } from '../src/utils';

const work = true

const Home: NextPage = () => {
  const { width, height } = useWindowDimensions();
  console.log({ width, height }); 
  return (
    <HomeWrapper>
      <Fade>
        <Navigation />
      </Fade>
      <Fade>
        <Flex wrap='true'>
          <Section title='about'/>
          <About />
        </Flex>
      </Fade>
      {work ? (
        <Flex wrap='true'>
          <Section title='work'/>
          <Work />
        </Flex> 
      ) : <></>}
      <Fade>
        <Flex wrap='true'>
          <Section title='colophon'/>
          <Colophon />
        </Flex>
      </Fade>
    </HomeWrapper> 
  )
}

export default Home

export const HomeWrapper = styled.div`
  max-width: 100%;
`;