import React from 'react'
import SectionTitle from './SectionTitle/SectionTitle';
import ContactItems from './ContactItems/ContactItems';
import { Flex, Box } from 'grid-styled';

const Contact = (props) => (
  <Flex wrap>

    <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
      <SectionTitle title='contact' />
    </Box>

    <ContactItems
      email='jason.mandel@purchase.edu'
      phone='(1) 914 417 5472'/>
  </Flex>
)

export default Contact;
