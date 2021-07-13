const B =({children})=>{
  return <span style={{fontWeight:'500',textDecoration:'underline'}}>{children}</span>
}

export const timeline = [
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
        After learning <B>React.js</B>, started building 'Portfolio
        Builder' with <B> React.js</B>, <B>Firebase</B> etc.
      </>
    ),
  },
];
