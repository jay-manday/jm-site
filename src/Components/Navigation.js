import React from 'react';
import { Flex, Box } from 'grid-styled';
import NavTitle from './NavTitle/NavTitle';
import SectionTitle from './SectionTitle/SectionTitle';
<<<<<<< HEAD:src/components/Navigation.jsx

const data = [
  {id:1, name: 'about'},
  {id:2, name: 'work' },
  {id:3, name: 'colophon'},
];

const Navigation = (props) => (
  <Flex wrap align='baseline' justify='space-around'>

      <Box w={[1/4]} pt={[3, 4]} pb={[3, 4]} pl={[2, 3]} >
        <NavTitle />
=======
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
>>>>>>> master:src/Components/Navigation.js
      </Box>
    {data.map((item, id) =>

        <Box key={id} w={[1/4]} p={[3,4]}  pl={[2, 3]} >
          <SectionTitle title={item.name}/>
        </Box>
    )}
  </Flex>
)

export default Navigation;
