const B = ({ children }) => {
  return (
    <span style={{ fontWeight: '500', textDecoration: 'underline' }}>
      {children}
    </span>
  );
};

export const timeline = [
  {
    date: 'October, 2021',
    body: 'Made 12 PRs and completed Hacktoberfest for the first time 🎉. Started learning Typescript and SEO basics. This portfolio website now comes up on searching my name.',
  },
  {
    date: '9th October, 2021',
    body: 'Finished building Learn-Blockchain app for a 4-days-long hackathon (participated solo). The webapp made using Next.js, Crypto.js etc gives a slight introduction/visualization to blockchain technology to beginners. ',
  },
  {
    date: '📌 September, 2021',
    body: 'Started 2-months internship at a Startup.',
  },
  {
    date: '4th September, 2021',
    body: 'Started working on a Kindle Product to be used to organize kindle highlights and get daily emails of a random favorite highlight.',
  },
  {
    date: 'August, 2021',
    body: 'Worked on open-source and my 4+ projects based on React.js, Node.js, etc.',
  },
  {
    date: '26th July, 2021',
    body: 'Started making "Public chatrooms" Using React.js, Socket.io ,Chakra UI etc. Anyone can create rooms and chat with large number of users live. Works on Web sockets.',
  },
  {
    date: '18th July, 2021',
    body: 'Started making "Learn DSA" web-project Using Next.js, React.js, Chakra UI,Vis.js etc to share my DSA notes.',
  },
  {
    date: '14th July, 2021',
    body: 'Started learning Next.js',
  },
  {
    date: '12th July, 2021',
    body: 'Started learning data structures and algorithms.',
  },
  {
    date: '10th July, 2021',
    body: "Finished building 'Portfolio Builder'. ",
  },
  {
    date: '28th June, 2021',
    body: (
      <>
        After learning <B>React.js</B>, started building 'Portfolio Builder'
        with <B> React.js</B>, <B>Firebase</B> etc.
      </>
    ),
  },
];
