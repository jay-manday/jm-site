import React from 'react';
import { Flex, Box } from 'rebass';

import { setupClock, drawClock } from './ClockSketch';
import WorkItem from './WorkItem';

const data = [
    {
        href:"/work?query=numina",
        img: "/images/numina.jpeg",
        title: "Numina",
        medium: "Engineering & Product",
        processing: false,
        setup: "",
        draw: "",
    },
    {
        href: "/work?query=foam",
        img: "/images/FOAM.png",
        title: "FOAM",
        medium: "Product & Engineering",
        processing: false,
        setup: "",
        draw: "",
    },
    {
        href: "/work?query=urban-systems",
        img: "/images/Urban.png",
        title: "Urban Systems Lab",
        medium: "Strategizing Urban Resiliency",
        processing: false,
        setup: "",
        draw: "",
    },
    {       
        href: "/work?query=contingent-clock",
        img: "",
        title: "Contingent Clock",
        medium: "chance and code",
        processing: true,
        setup: setupClock,
        draw: drawClock,
    },
    {
        href: "/work?query=paper-score-three",
        img: "/images/Paper.jpg",
        title: "Paper Score #3",
        medium: "paper, pulp, piezos, & pure data",
        processing: false,
        setup: "",
        draw: "",
    },
    {
        href: "/work?query=the-multi",
        img: "/images/Multi.png",
        title: "The Multi 18",
        medium: "design conference",
        processing: false,
        setup: "",
        draw: "",
    },
]


const Work = () => (
  <Box width={1}>
    <Flex flexWrap="wrap">
      {data.map(d => (
        <Box
          key={d.href}
          width={[1, 1 / 2, 1 / 3]}
          p={[2, 3]}
          pl={[3, 4]}
          pt={[3, 4]}
        >
          <WorkItem
            href={d.href}
            img={d.img}
            title={d.title}
            medium={d.medium}
            processing={d.processing}
            setup={d.setup}
            draw={d.draw}
          />
        </Box>
        ))}
    </Flex>
  </Box>
);

export default Work;
