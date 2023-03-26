import { useColorMode } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Container = styled.div<{
  isDark: boolean;
}>`
  position: relative;
  height: 1.75rem;
  width: 3rem;
  border: 0.125rem solid white;
  cursor: pointer;
  border-radius: 1rem;
  display: inline-block;
  transition: ease 0.2s;
  ${({ isDark }) =>
    isDark
      ? `
    border-color: white;
  `
      : `
    border-color: black;
  `}
`;

const Slider = styled.span<{
  isDark: boolean;
}>`
  width: 1.25rem;
  height: 1.25rem;

  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  transition: ease 0.2s;
  ${({ isDark }) =>
    isDark
      ? `
      left: 0.1rem; 
      background-color: white;
    `
      : `
      left: calc(100% - 0.1rem);
      transform: translate(-100%, -50%);
      background-color: black;
    `}
`;

const SwitchComponent = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Container onClick={toggleColorMode} isDark={isDark}>
      <Slider isDark={isDark} />
    </Container>
  );
};

export default SwitchComponent;
