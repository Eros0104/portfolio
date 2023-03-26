import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from './logo';
import ThemeSwitch from './theme-switch';

interface LinkItemProps {
  href: string;
  children: React.ReactNode;
  path: string;
}

const LinkItem = ({ href, children, path }: LinkItemProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassteal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

interface Props {
  path: string;
}

const Navbar = (props: Props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact me
          </LinkItem>
        </Stack>
        <Box flex={1} justifyContent="right" display="flex" alignItems="center">
          <ThemeSwitch />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                aria-label="Options"
                variant="outline"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem>Posts</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
