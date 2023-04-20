import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { Router } from 'next/router';
import Navbar from './navbar';
import VoxelGate from './voxel-gate';

interface Props {
  children: JSX.Element;
  router: Router;
}

function Main({ children, router }: Props) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Eros Mendonça - Home</title>
      </Head>

      <Navbar path={router.asPath} />

      <VoxelGate />

      <Container maxW="container.md" pt={14} zIndex={1} position="relative">
        {children}
      </Container>
    </Box>
  );
}

export default Main;
