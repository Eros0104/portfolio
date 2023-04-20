import React from 'react';
import type { NextPage } from 'next';
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Paragraph from '../components/paragraph';
import Section from '../components/section';
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
      css={{ backdropFilter: 'blur(10px)' }}
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

    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        I ♥
      </Heading>
      <Paragraph>
        Art, Music,{' '}
        <Link href="https://instagram.com/mendoncaeros" target="_blank">
          Drawing
        </Link>
        , Movies
      </Paragraph>
    </Section>

    <Section delay={0.4}>
      <Heading as="h3" variant="section-title">
        Social Media
      </Heading>
      <List>
        <ListItem>
          <Link href="https://github.com/eros0104" target="_blank">
            <GitHubIcon /> @eros0104
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://instagram.com/mendoncaeros" target="_blank">
            <InstagramIcon /> @mendoncaeros
          </Link>
        </ListItem>
      </List>
    </Section>
  </Container>
);

export default Home;
