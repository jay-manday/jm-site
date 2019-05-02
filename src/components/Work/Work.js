import React from 'react';
import { Flex, Box } from 'rebass';

import Processing from 'components/Processing';
import WorkItems from './WorkItems';


const Work = () => (
  <Box width={3 / 4}>
    <Flex wrap="true">
      <Box
        width={[1, 1 / 2, 1 / 3]}
        p={[2, 3]}
        pl={[3, 4]}
        pt={[3, 4]}
      >
        <WorkItems
          href="/work/foam"
          img="https://d2w9rnfcy7mm78.cloudfront.net/2111176/large_425ea424d82a29c1ac59d70eb7d4fa00.png"
          title="FOAM"
          medium="Product Design & Engineering"
        />
      </Box>
      <Box
        width={[1, 1 / 2, 1 / 3]}
        p={[2, 3]}
        pl={[3, 4]}
        pt={[3, 4]}
      >
        <WorkItems
          href="/work/urban-systems"
          img="https://d2w9rnfcy7mm78.cloudfront.net/2138198/large_251a389cfa80552a3b60cbc1c7f7e1f7.png"
          title="Urban Systems Lab"
          medium="Strategizing Urban Resiliency"
        />
      </Box>
      <Box
        width={[1, 1 / 2, 1 / 3]}
        p={[2, 3]}
        pl={[3, 4]}
        pt={[3, 4]}
      >
        <WorkItems
          href="/work/graphics"
          img="https://d2w9rnfcy7mm78.cloudfront.net/1219626/large_634b313d842272ccff0523507d676ab8.jpg"
          title="Graphics"
          medium="2016 - 2018"
        />
      </Box>
    </Flex>
    <Flex wrap="true">
      <Box
        width={[1, 1 / 2, 1 / 3]}
        p={[2, 3]}
        pl={[3, 4]}
        pt={[3, 4]}
      >
        <WorkItems
          href="/work/the-multi"
          img="https://d2w9rnfcy7mm78.cloudfront.net/1450245/original_4f1645b374101daf0f70fcb0013b7c2b.png"
          title="The Multi 18"
          medium="design conference"
        />
      </Box>
      <Box
        width={[1, 1 / 2, 1 / 3]}
        p={[2, 3]}
        pl={[2, 3]}
        pt={[3, 4]}
      >
        <Processing />
      </Box>
      <Box
        width={[1, 1 / 2, 1 / 3]}
        p={[2, 3]}
        pl={[2, 3]}
        pt={[3, 4]}
      >
        <WorkItems
          href="/work/paper-score-three"
          img="https://d2w9rnfcy7mm78.cloudfront.net/1156854/original_7ea09cc794c5a2b2c9ec4ab1702d9bc7.jpg"
          title="Paper Score #3"
          medium="paper, piezos, & pure data"
        />
      </Box>
    </Flex>
  </Box>
);

export default Work;
