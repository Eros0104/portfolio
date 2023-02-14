import React from 'react';
import type { NextPage } from 'next';
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import Paragraph from '../components/paragraph';
import Section from '../components/section';
import { BioSection, BioYear } from '../components/bio';
import Timeline from '../components/timeline';

const Home: NextPage = () => (
  <Container>
    <Box
      borderRadius="lg"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      p={3}
      mb={6}
      mt={3}
      textAlign="center"
    >
      Hello, I&apos;m a front-end developer based in Portugal!
    </Box>
    <Box>
      <Box>
        <Heading as="h2" variant="page-title">
          Eros Mendonça
        </Heading>
        <p>Developer / Artist</p>
      </Box>
    </Box>
    <Box
      flexShrink={0}
      mt={{ base: 3, md: 0 }}
      ml={{ md: 6 }}
      textAlign="center"
    >
      <Image
        alt="Profile picture"
        src="../images/profile.jpg"
        borderRadius="full"
        borderColor="whiteAlpha.800"
        maxWidth="100px"
        display="inline-block"
        borderWidth={2}
        borderStyle="solid"
      />
    </Box>
    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        About
      </Heading>
      <Paragraph>
        I&apos;m a software developer with a passion for creating beautiful user
        experiences.
      </Paragraph>
    </Section>

    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        Bio
      </Heading>
      <Timeline />
    </Section>
  </Container>
);

export default Home;
