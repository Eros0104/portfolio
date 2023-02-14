import { useEffect, useState } from 'react';
import { BioSection, BioYear } from './bio';

const Timeline = () => {
  const [bioEvents, setBioEvents] = useState([]);
  const getData = () => {
    fetch('bio.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(myJson => {
        setBioEvents(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {bioEvents.map(bioEvent => (
        <BioSection>
          <BioYear>{bioEvent.year}</BioYear>
          {bioEvent.description}
        </BioSection>
      ))}
    </>
  );
};

export default Timeline;
