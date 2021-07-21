const blogs = [
  {
    title: 'My Experience With Next.js',
    snippet: 'How Next.js made my development easier',
    body: `'Next.js' is a React framework that enables server-side-render(SSR) which means that the web components are rendered on the web server before rendering them to the client which feels a lot faster than client-side rendering.

    React.js uses Client-side-rendering(CSR) which is less SEO (Search engine optimization) friendly as compared to Next.js and I will be discussing the reason now.

    By default, Next.js pre-renders every page. This means that it renders the most essential HTML and Javascript code before the requests are made to that page. When the page is opened in the browser, Next.js hydrates the pre-rendered code (adds the other functionality to it) which makes the page fully usable. This makes the loading a lot faster and is better for the search engine bot crawlers for SEO.

    Apart from the better SEO, in Next.js we don't need to install any other npm library for routing as we do in react by installing react-router-dom.
    We also don't need to add every single route to the JS code because, in Next.js, there exists a 'page' directory in which you can use adding folders and js files to decide the path. This makes the development process a lot easier and less time-consuming.

    getStaticPaths and getStaticProps are the two Next APIs which allow the developer to generate static websites from dynamic data (example: fetching data).

    Apart from this, Next.js has a lot better debugging style and it made my Chakra UI web apps a lot faster than they were before.
    
    I m 100% planning to use Next.js for my next project.
    
    `,
    imageUrl: '/blogs/nextblogtweet.png',
    date: '20 July 2021',
  },
  {
    title: 'React.js',
    snippet: 'Switching from plain HTML,CSS & Js to React.js',
    body: `React.js is one of the most famous frontend frameworks.
React allows developers to break down the web app's whole UI into smaller components (basically into Javascript functions) which can be used again and again preventing the re-writing of code.

The components made by the developers are functions that return JSX(JavaScript XML) which works as combinations of JS and HTML code.
We can also give 'props' to the components just as we give arguments to functions. These props can set specific properties of the "children" inside the component.

React Hooks are special functions that let you “hook onto” React state and lifecycle features inside function components. This makes the development of UI which reacts to the state much easier than what it used to be in previous React versions.

React JS also solved my problem of writing repetitive HTML, Js code.`,
    date: '23 June 2021',
    imageUrl:'/blogs/react.png'
  },
];

export default blogs;
