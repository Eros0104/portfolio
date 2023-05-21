export interface Work {
  title: string;
  description: string;
  link: string;
  img: {
    alt: string;
    src: string;
  };
}

export interface WorkSection {
  section: string;
  works: Work[];
}

const worksSections: WorkSection[] = [
  {
    section: 'Academic Projects',
    works: [
      {
        title: 'Alles App',
        description: `The "Alles" app is a Kotlin-based mobile application developed as part of a college project. The app's primary purpose is to streamline and simplify the management of a card used for public transport, offering users an intuitive and convenient way to handle their travel needs.`,
        link: 'https://github.com/Eros0104/fiap-alles-prototype',
        img: {
          alt: 'Image with magenta background and a text in its center written "Alles"',
          src: 'images/works/alles-cover.png',
        },
      },
    ],
  },
  {
    section: 'Personal Projects',
    works: [
      {
        title: '3D Rotating Sphere',
        description: `The "3D Rotating Sphere" program written in JavaScript demonstrates an engaging animation of a rotating sphere within a 3D space. Using the HTML Canvas element and pure JavaScript calculations, this program provides an interactive and visually appealing experience.`,
        link: 'https://3d-sphere-indol.vercel.app/',
        img: {
          alt: 'Image with a 3d sphere',
          src: 'images/works/3d-sphere.png',
        },
      },
      {
        title: 'Snake Game',
        description: `The classic arcade-style game where the player controls a snake that moves around the screen, eating food and growing longer. The game is implemented using the Turtle module, which provides a simple and intuitive way to render graphics.`,
        link: 'https://github.com/Eros0104/python-snake-game',
        img: {
          alt: 'Image showing a text written "snake" and a retro snake in arcade-style above it.',
          src: 'images/works/snake-game.png',
        },
      },
    ],
  },
];

export default worksSections;
