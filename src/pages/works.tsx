import React from 'react';
import type { NextPage } from 'next';
import { Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import WorkCard from '../components/work-card';
import Section from '../components/section';
import { worksData } from '../config';

const Work: NextPage = () => (
  <Container>
    {worksData.map(workSection => (
      <Section key={workSection.section}>
        <Heading my={8} as="h3" variant="section-title">
          {workSection.section}
        </Heading>
        <Grid gap="6" gridTemplateColumns="1fr 1fr">
          {workSection.works.map(work => (
            <GridItem key={work.title}>
              <WorkCard title={work.title} link={work.link} img={work.img}>
                {work.description}
              </WorkCard>
            </GridItem>
          ))}
        </Grid>
      </Section>
    ))}
  </Container>
);

export default Work;
