import { useEffect, useState } from 'react';
import { BioSection, BioYear } from './bio';
import { Bio } from '../types';
import { BioService } from '../services';

const Timeline = () => {
  const [bioEvents, setBioEvents] = useState<Bio[]>([]);

  const getData = async () => {
    const newBioEvents = (await BioService.get()).sort(
      (a, b) => b.year - a.year,
    );
    setBioEvents(newBioEvents);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {bioEvents.map(bioEvent => (
        <BioSection key={bioEvent.id}>
          <BioYear>{bioEvent.year}</BioYear>
          {bioEvent.description}
        </BioSection>
      ))}
    </>
  );
};

export default Timeline;
