import React from 'react';
import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => shouldForwardProp(prop) || prop === 'transition',
});

interface Props {
  children: React.ReactNode;
  delay?: number;
}

const Section = ({ children, delay = 0 }: Props) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    // @ts-ignore
    transition={{ duration: 0.5, delay }}
    mb={6}
  >
    {children}
  </StyledDiv>
);

export default Section;
