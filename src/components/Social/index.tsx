import React from 'react';
import { Flex } from 'rebass';
import Icon  from './Icon';

const data = [
  {
    width: 45,
    height: 45,
    url: "https://www.linkedin.com/in/jason-mandel-960a39103/",
    image: "https://d2w9rnfcy7mm78.cloudfront.net/2138316/original_3a3e994d9cc235aff7e8f7ecf64a0101.png"
  },
  {
    width: 45,
    height: 45,
    url: "https://twitter.com/jaymanday",
    image: "https://d2w9rnfcy7mm78.cloudfront.net/1222973/original_a59c38ae69092fab601f6e88ba9a6d7f.png"
  },
  {
    width: 45,
    height: 45,
    url: "https://github.com/jmandel1027",
    image: "https://d2w9rnfcy7mm78.cloudfront.net/1221844/original_713585cf2c09a83a4a06d0757b1a2fc3.png"
  },
  {
    width: 55,
    height: 55,
    url: "https://www.are.na/jason-mandel/channels",
    image: "https://d2w9rnfcy7mm78.cloudfront.net/1222957/original_e951a05eb73d4494cd78c92da928ec71.png"
  }
]

const Social = () => (
  <Flex wrap="true">
    {data.map(d => <Icon key={d.url} width={d.width} height={d.height} url={d.url} image={d.image} />)}
  </Flex>
);

export default Social;