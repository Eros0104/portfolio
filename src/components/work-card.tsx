import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
  Image,
  Divider,
  Button,
  ButtonGroup,
  useColorModeValue,
} from '@chakra-ui/react';
import openNewTab from '../lib/openNewTab';

interface CardProps {
  children: React.ReactNode;
  img: {
    alt: string;
    src: string;
  };
  link: string;
  title: string;
}

const WorkCard = ({ children, img, link, title }: CardProps) => (
  <Box
    p="4"
    borderWidth="1px"
    borderRadius="lg"
    bg={useColorModeValue('#ffffff40', '#20202380')}
  >
    <Image
      objectFit="cover"
      width="100%"
      height="8rem"
      src={img.src}
      alt={img.alt}
      borderRadius="lg"
    />
    <Stack mt="3" spacing="3">
      <Heading size="md">{title}</Heading>
      <Text>{children}</Text>
    </Stack>

    <Divider my={3} />

    <ButtonGroup spacing="2">
      <Button
        onClick={() => openNewTab(link)}
        size="sm"
        variant="solid"
        colorScheme="teal"
      >
        View
      </Button>
    </ButtonGroup>
  </Box>
);

export default WorkCard;
