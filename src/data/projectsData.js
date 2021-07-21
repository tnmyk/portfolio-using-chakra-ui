export const projectsData = {
  'portfolio-builder': {
    name: 'Portfolio Builder',
    date: '28 June, 2021',
    productUrl: 'https://portfoliobuilder.vercel.app/',
    githubUrl: 'https://github.com/tnmyk/portfolio-builder',
    body: (
      <>
        Made using React.js, Firebase Firestore, Firebase Auth, Firebase
        Storage.
        <br />
        <br />
        Web App lets people create their free account and start creating their
        own portfolio website free of cost and without code or any experience in
        web designing. Users can get their custom username which will be used in
        their portfolio link which can easily be used for sharing the portfolio
        with others even for professional purpose especially when from non-tech
        industry.
        <br />
        <br />
        People can set their profile picture, add their bio, display their
        skills and also show off their top five projects with image preview.
        <br />
        Users can also add their social links to their Linkedin, Twitter,
        Instagram and few other popular social media apps.
        <br />
        <br />
        Firestore was used to handle userdata, Firebase storage was used to save
        profile pictures and project-preview images, while Firebase Auth was
        used to let others create a free account and login to edit the
        portfolios.
        <br /> <br />
        This project also introduced me to the concepts of SaaS (Software as a
        service) in tech startups.
      </>
    ),
  },
  'learn-dsa-(web-app-mvp-is-ready)': {
    name: 'Learn DSA (Web App MVP is ready)',
    date: '18 July, 2021',
    productUrl: 'https://learn-dsa.vercel.app/',
    githubUrl: 'https://github.com/tnmyk/learn-dsa',
    body: (
      <>
        {' '}
        Made using Vis.js, Next.js, React.js, Chakra UI etc.
        <br />
        <br />
        Website made by me while learning DSA myself. Currently under
        development, it will be an amazing resource for others to learn Data
        structures and algoriths from. <br />
        The website also contains topic-wise checklist in which others can mark
        their progress and it will be saved automatically in the localStorage,
        marking the date at which the person completed the topic. <br />
        Their is also a network graph which will make the classifications and
        how DSA concepts are interlinked clearer.
        <br />
        Project is being developed every day and soon the network graph will be
        added which will make learning the topics a lot more easier.
        <br />
        <br />
        As the numbers of the web pages will be a lot more than a regular react
        website, I decided to use Next.js which makes the routing much easier
        and the project a lot more scalable or else I would have need to add
        'react-router-dom' (React.js library) to add each route and use Params
        which would have been very hectic for a large project like this. <br />{' '}
        <br />
        Aside from Next.js, Chakra UI made the designing much easier, helping me
        to avoid making extra css files and declaring classnames and ids. <br />{' '}
        <br />
        I also used Canva for making graphic designs shown in the cards in the
        home page. <br />
        <br />
        Currently, I m working on adding more DSA topics.
      </>
    ),
  },
  'minimalistic-note-taking-desktop-app': {
    name: 'Minimalistic Note Taking Desktop App',
    date: '27 May, 2021',
    productUrl: '',
    githubUrl: 'https://github.com/tnmyk/notes-app',
    body: (
      <>
        Made using Electron.js, Express.js, Quill.js, Axios and fs (filesystem)
        modules.
        <br />
        <br />
        Used this project to brush up on my Express.js and Electron.js skills.
        <br />
        The desktop app lets you create, edit, delete notes locally.
        <br />
        <br />
        The front-end on the Electron app makes backend (local server) requests
        using Axios to create, delete , get or edit the notes.
        <br />
        <br />
        Quill.js gives you full control over styling of your notes (example:
        Bold, underline font-size etc.)
        <br />
        <br />
        The minimalistic app is perfect for making notes and saving them locally
        which is a lot more secure than on cloud.
      </>
    ),
  },
};
