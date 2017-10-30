import React from 'react';
import { Flex, Box, Grid } from 'grid-styled';
import SectionTitle from './SectionTitle/SectionTitle';
import WorkItems from './WorkItems/WorkItems';
import SketchWrapper from './SketchWrapper/SketchWrapper';
import Clock from './Sketches/Clock';

const Work = (props) => (
  <Flex wrap>
    <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
      <SectionTitle title='work' />
    </Box>

    <Grid width={3/4}>
      <Flex wrap>

        <Box w={[1, 1/2, 1/3]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
          <WorkItems
            href={`/work/the-multi`}
            img={`https://d2w9rnfcy7mm78.cloudfront.net/1295090/original_c585fad9056ca53ae2e11ccea6cc1b63.jpg`}
            title={'The Multi 18'}
            medium={'design conference'}
            site={'2017 - 2018'}
          />
        </Box>
        <Box w={[1, 1/2, 1/3]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
          <SketchWrapper
            href={`/work/contingent-clock`}
            classID={'SketchWrapper'}
            className={'sketch'}
            sketch={Clock}
            title={'Contingent Clock'}
            medium={'Chance and Code'}
          />
        </Box>

        <Box w={[1, 1/2, 1/3]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
          <WorkItems
            href={`/work/paper-score-three`}
            img={`https://d2w9rnfcy7mm78.cloudfront.net/1156854/original_7ea09cc794c5a2b2c9ec4ab1702d9bc7.jpg`}
            title={'Paper Score #3'}
            medium={'paper, piezos, & pure data'}
            site={'Neuberger Museum, 2016'}
          />
        </Box>


      </Flex>
    </Grid>
  </Flex>
)

export default Work;
