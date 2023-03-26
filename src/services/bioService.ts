import { BaseBio, Bio } from '../types';

class BioService {
  static async get(): Promise<Bio[]> {
    let getResponse: Bio[] = [];

    await fetch('bio.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(bioList => {
        getResponse = bioList.map((item: BaseBio, idx: number) => ({
          ...item,
          id: idx,
        }));
      });

    return getResponse;
  }
}

export default BioService;
