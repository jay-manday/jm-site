import React from 'react';
import { Flex, Grid } from 'grid-styled';
import WorkTitle from './WorkTitle/WorkTitle';
import WorkItems from './WorkItems/WorkItems';


const Work = (props) => (
  <div>
    <Flex wrap>
      <WorkTitle />

            <Grid width={3/4}>
              <Flex wrap>

                <WorkItems
                  href={`/work/paper-score-three`}
                  img={`https://d2w9rnfcy7mm78.cloudfront.net/1156854/original_7ea09cc794c5a2b2c9ec4ab1702d9bc7.jpg`}
                  title={'Paper Score #3'}
                  medium={'paper, piezos, & pure data'}
                  site={'Neuberger Museum, 2017'}
                />

              </Flex>
            </Grid>

          </Flex>
      </div>
    )

export default Work;
