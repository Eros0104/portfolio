import { useEffect, useState } from 'react';
import { BioSection, BioYear } from './bio';
import { Bio } from '../types';

const Timeline = () => {
  const [bioEvents, setBioEvents] = useState<Bio[]>([]);
  const getData = () => {
    fetch('bio.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(bioList => {
        setBioEvents(
          bioList.map((item: any, idx: number) => ({ ...item, id: idx })),
        );
      });
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
