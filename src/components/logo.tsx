import Link from 'next/link';
import { Text, useColorModeValue, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 20px;
`;

const Logo = () => (
  <Link href="/">
    <a>
      <LogoBox>
        <Image
          src={`images/${useColorModeValue('black', 'white')}-logo.png`}
          width="1.5rem"
          marginRight="0.25rem"
        />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
        >
          Eros Mendonça
        </Text>
      </LogoBox>
    </a>
  </Link>
);

export default Logo;
