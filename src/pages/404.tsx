import React from 'react';
import type { NextPage } from 'next';
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Error404: NextPage = () => {
  const router = useRouter();
  return (
    <Container>
      <Box
        p={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        textAlign="center"
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Box>Page Not Found</Box>
        <Box pl={3} ml={3} borderLeft="2px solid #fff">
          <Heading as="h2">404</Heading>
        </Box>
      </Box>
      <Box textAlign="center" m={5}>
        <Button
          variant="outline"
          colorScheme="teal"
          onClick={() => router.push('/')}
        >
          Go Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default Error404;
