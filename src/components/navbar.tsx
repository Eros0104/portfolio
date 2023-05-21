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
  const activeColor = useColorModeValue('gray.600', 'whiteAlpha.600');
  const inactiveColor = useColorModeValue('gray.900', 'whiteAlpha.900');
  return (
    <NextLink href={href}>
      <Link p={2} color={active ? activeColor : inactiveColor}>
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
      css={{
        backdropFilter: 'blur(10px)',
        borderBottom: `1.5px solid ${useColorModeValue(
          'rgba(0,0,0,0.16)',
          'rgba(255, 255, 255, 0.25)',
        )}`,
      }}
      zIndex={100}
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
                <NextLink href="/works" passHref>
                  <MenuItem>Works</MenuItem>
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
