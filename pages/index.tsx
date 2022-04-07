import React from 'react';
import type { NextPage } from 'next';
import { Container, Box, Heading } from '@chakra-ui/react';

const Home: NextPage = () => (
  <Container>
    <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
      Hello, I&apos;m a front-end developer based in Brazil!{' '}
    </Box>
    <Box>
      <Box>
        <Heading as="h2" variant="page-title">
          Eros Mendonça
        </Heading>
        <p>Developer / Artist</p>
      </Box>
    </Box>
    <div>Hello world</div>
  </Container>
);

export default Home;
