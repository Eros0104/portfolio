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

      <Container maxW="container.md" pt={14}>
        <VoxelGate />
        {children}
      </Container>
    </Box>
  );
}

export default Main;
