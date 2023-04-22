import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const bulletSize = '1rem';
const bulletTop = '0.125rem';

const lineWidth = '0.2rem';
const lineTop = `calc(${bulletSize} + ${bulletTop})`;
const lineLeft = `calc((${bulletSize} / 2) - (${lineWidth} / 2))`;
const lineBottom = `-${bulletTop}`;

const bioYearWidth = '2.25rem';
const bioYearRightMargin = '1rem';

export const BioSection = styled(Box)`
  padding-left: 5.5rem;
  text-indent: calc(0px - ${bioYearRightMargin} - ${bioYearWidth});
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

export const BioYear = styled.span`
  width: ${bioYearWidth};
  text-align: center;
  font-weight: bold;
  margin-right: ${bioYearRightMargin};
`;
