import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const bulletSize = '1rem';
const bulletTop = '0.25rem';

const lineWidth = '0.2rem';
const lineTop = `calc(${bulletSize} + ${bulletTop})`;
const lineLeft = `calc((${bulletSize} / 2) - (${lineWidth} / 2))`;
const lineBottom = `-${bulletTop}`;

export const BioSection = styled(Box)`
  padding-left: 6.6rem;
  text-indent: -4.4rem;
  padding-bottom: 1rem;
  position: relative;

  :before {
    content: '';
    width: ${lineWidth};
    background-color: #525252;
    position: absolute;
    left: ${lineLeft};
    top: ${lineTop};
    bottom: ${lineBottom};
  }

  :last-child:before {
    display: none;
  }

  :after {
    content: '';
    width: ${bulletSize};
    height: ${bulletSize};
    border-radius: 100%;
    border: ${lineWidth} solid #525252;
    position: absolute;
    top: ${bulletTop};
    left: 0;
  }
`;

// mask-image: radial-gradient(
// circle at 50% 50%,
// rgba(0, 0, 0, 0) 49%,
// rgba(0, 0, 0, 1) 50%
// );

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;
