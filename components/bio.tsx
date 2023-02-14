import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
  padding-bottom: 1rem;
  position: relative;

  :after {
    content: '';
    width: 0;
    border: 0.1rem solid #525252;
    position: absolute;
    left: 1.1rem;
    top: 1.6rem;
    bottom: 0;
  }

  :last-child:after {
    display: none;
  }
`;

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;
