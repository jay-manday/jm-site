import React from 'react'
import NavTitle from './NavTitle/NavTitle';
import SectionTitle from './SectionTitle/SectionTitle';
import { Flex, Box } from 'grid-styled';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

const Navigation = (props) => (
  <Flex wrap align='baseline' justify='space-around'>
    <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}>
      <ErrorBoundary>
        <NavTitle />
      </ErrorBoundary>
    </Box>

    {props.items.map((title) =>
      <Box w={[1/4]} p={[2,3]} pl={[2, 3]}>
        <ErrorBoundary>
          <SectionTitle title={title} />
        </ErrorBoundary>
      </Box>
    )}

  </Flex>
)

export default Navigation;
