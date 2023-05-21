import React from 'react';
import type { NextPage } from 'next';
import { Container, Grid, GridItem, Heading, Box } from '@chakra-ui/react';
import WorkCard from '../components/work-card';
import Section from '../components/section';
import { worksData } from '../config';
import { WorkSection, Work } from '../config/works';

interface CardGridProps {
  section: WorkSection;
}

const getSplittedWorks = (section: WorkSection) => {
  const leftWorks: Work[] = [];
  const rightWorks: Work[] = [];

  section.works.forEach((work, index) => {
    if (index % 2 === 0) {
      leftWorks.push(work);
    } else {
      rightWorks.push(work);
    }
  });

  return { leftWorks, rightWorks };
};

const Card = ({ work }: { work: Work }): JSX.Element => (
  <Box _notFirst={{ marginTop: 4 }}>
    <WorkCard title={work.title} link={work.link} img={work.img}>
      {work.description}
    </WorkCard>
  </Box>
);

const CardsGridDesktop = ({ section }: CardGridProps): JSX.Element => {
  const { leftWorks, rightWorks } = getSplittedWorks(section);
  return (
    <Grid gap={4} gridTemplateColumns="1fr 1fr">
      <GridItem>
        {leftWorks.map(work => (
          <Card key={work.title} work={work} />
        ))}
      </GridItem>
      <GridItem>
        {rightWorks.map(work => (
          <Card key={work.title} work={work} />
        ))}
      </GridItem>
    </Grid>
  );
};

const Work: NextPage = () => (
  <Container>
    {worksData.map(workSection => (
      <Section key={workSection.section}>
        <Heading my={8} as="h3" variant="section-title">
          {workSection.section}
        </Heading>
        <Box display={{ base: 'none', sm: 'unset' }}>
          <CardsGridDesktop section={workSection} />
        </Box>
        <Box display={{ base: 'unset', sm: 'none' }}>
          {workSection.works.map(work => (
            <Card key={work.title} work={work} />
          ))}
        </Box>
      </Section>
    ))}
  </Container>
);

export default Work;
