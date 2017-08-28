import React from 'react'
import SectionTitle from './SectionTitle/SectionTitle';
import ContactItems from './ContactItems/ContactItems';
import ContactIcons from './ContactIcons/ContactIcons';
import { Flex, Box } from 'grid-styled';


const Contact = (props) => (

  <Flex wrap>
    <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
      <SectionTitle title='contact' />
    </Box>

    <Box w={[3/4, 2/3 ]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
      <ContactItems
        email='jason.mandel@purchase.edu'
        phone='(1) 914 417 5472'
      />
    <Flex wrap>

      <ContactIcons
        width={48}
        height={48}
        url='https://twitter.com/jaymanday'
        image='https://d2w9rnfcy7mm78.cloudfront.net/1222973/original_a59c38ae69092fab601f6e88ba9a6d7f.png'
      />

      <ContactIcons
        width={48}
        height={48}
        url='https://github.com/jay-manday'
        image='https://d2w9rnfcy7mm78.cloudfront.net/1221844/original_713585cf2c09a83a4a06d0757b1a2fc3.png'
      />

      <ContactIcons
        url='https://www.are.na/jason-mandel-1484367816/channels'
        image='https://d2w9rnfcy7mm78.cloudfront.net/1222957/original_e951a05eb73d4494cd78c92da928ec71.png'
        />
    </Flex>

    </Box>


  </Flex>
)

export default Contact;
