import React from 'react';
import { Flex, Box } from 'rebass';

import Processing from 'components/Processing';
import clock from 'components/Processing/ProcessingSketch';

import WorkItems from './WorkItems';

const Work = () => (
  <Box width={3 / 4}>
    <Flex flexWrap="wrap">
      <Box
        width={[1, 1 / 2, 1 / 3]}
        p={[2, 3]}
        pl={[3, 4]}
        pt={[3, 4]}
      >
        <WorkItems
          href="/work?query=numina"
          img="../../../static/images/numina.jpeg"
          title="Numina"
          medium="Engineering & Product"
        />
      </Box>
      <Box
        width={[1, 1 / 2, 1 / 3]}
        p={[2, 3]}
        pl={[3, 4]}
        pt={[3, 4]}
      >
        <WorkItems
          href="/work?query=foam"
          img="../../../static/images/FOAM.png"
          title="FOAM"
          medium="Product & Engineering"
        />
      </Box>
      <Box
        width={[1, 1 / 2, 1 / 3]}
        p={[2, 3]}
        pl={[3, 4]}
        pt={[3, 4]}
      >
        <WorkItems
          href="/work?query=urban-systems"
          img="../../../static/images/Urban.png"
          title="Urban Systems Lab"
          medium="Strategizing Urban Resiliency"
        />
      </Box>
    </Flex>
    <Flex flexWrap="wrap">
      <Box
        width={[1, 1 / 2, 1 / 3]}
        p={[2, 3]}
        pl={[3, 4]}
        pt={[3, 4]}
      >
        <WorkItems
          href="/work?query=the-multi"
          img="../../../static/images/Multi.png"
          title="The Multi 18"
          medium="design conference"
        />
      </Box>
      <Box
        width={[1, 1 / 2, 1 / 3]}
        p={[2, 3]}
        pl={[3, 4]}
        pt={[3, 4]}
      >
        <Processing
          sketch={clock}
          href="/work?query=contingent-clock"
          title="Contingent Clock"
          medium="chance and code"
        />
      </Box>
      <Box
        width={[1, 1 / 2, 1 / 3]}
        p={[2, 3]}
        pl={[3, 4]}
        pt={[3, 4]}
      >
        <WorkItems
          href="/work?query=paper-score-three"
          img="../../../static/images/Paper.jpg"
          title="Paper Score #3"
          medium="paper, piezos, & pure data"
        />
      </Box>
    </Flex>
  </Box>
);

export default Work;
