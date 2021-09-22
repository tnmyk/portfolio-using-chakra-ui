const B = ({ children }) => {
  return (
    <span style={{ fontWeight: '500', textDecoration: 'underline' }}>
      {children}
    </span>
  );
};

export const timeline = [
  {
    date: '📌 September, 2021',
    body: 'Started 2-months internship at a Startup.',
  },
  {
    date: '4 September, 2021',
    body: 'Started working on a Kindle Product to be used to organize kindle highlights and get daily emails of a random favorite highlight.',
  },
  {
    date: 'August, 2021',
    body: 'Worked on open-source and my 4+ projects based on React.js, Node.js, etc.',
  },
  {
    date: '26 July, 2021',
    body: 'Started making "Public chatrooms" Using React.js, Socket.io ,Chakra UI etc. Anyone can create rooms and chat with large number of users live. Works on Web sockets.',
  },
  {
    date: '18 July, 2021',
    body: 'Started making "Learn DSA" web-project Using Next.js, React.js, Chakra UI,Vis.js etc to share my DSA notes.',
  },
  {
    date: '14 July, 2021',
    body: 'Started learning Next.js',
  },
  {
    date: '12 July, 2021',
    body: 'Started learning data structures and algorithms.',
  },
  {
    date: '10 July, 2021',
    body: "Finished building 'Portfolio Builder'. ",
  },
  {
    date: '28 June, 2021',
    body: (
      <>
        After learning <B>React.js</B>, started building 'Portfolio Builder'
        with <B> React.js</B>, <B>Firebase</B> etc.
      </>
    ),
  },
];
