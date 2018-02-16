const portfolio = [
  { img: "images/simple-react-projects.jpg",
    link: "https://simple-react-projects.herokuapp.com/",
    caption: "A handful of simple vanilla JS projects redone using React and Redux. The collection makes use of React-Router-Dom for routing, Redux for state control and Materialize.css for styling.",
    links: [
      { name: "Github Repo",
        link: "https://github.com/attributeofextension/simple-react-projects"
      }
    ]  
  },
  {
    img: "images/weather_app_react.jpg",
    link: "https://simple-react-projects.herokuapp.com/weatherapp",
    caption: "A weather app that makes use of browser geolocation to determine latitude and longitude which then makes a call to GoogleMaps and Open Weather APIs to gather location and weather data. Shows the weather for the current location.",
    links: [
      {name: "Github Repo",
       link: "https://github.com/attributeofextension/simple-react-projects"
      }
    ]
  },
  {
    img: "images/game_of_life_react.jpg",
    link: "https://codepen.io/attributeofextension/full/rpoLMg/",
    caption: "A React app that instantiates the rules of Conway's Game of Life.",
    links: [
      { name: "Codepen",
        link: "https://codepen.io/attributeofextension/pen/rpoLMg"
      }
    ]
  },
  {
    img: "images/tic_tac_toe.jpg",
    link: "https://codepen.io/attributeofextension/full/XVXMYP/",
    caption: "A Tic Tac Toe game made using vanilla JavaScript.",
    links: [
      { name: "Codepen",
        link: "https://codepen.io/attributeofextension/pen/XVXMYP"
      }
    ]
  },
  {
    img: "images/voting-app.jpg",
    link: "https://fcc-leahcarr-voting-app.herokuapp.com/",
    caption: "A voting app where you can create your own public poll that others can vote on. Node, Express, Passport and MongoDB for user authentication. Templating handled by Handlebars. Styled using Bootstrap. Pie chart driven by Google Charts.",
    links: [
      {
        name: "Github Repo",
        link: "https://github.com/attributeofextension/voting-app"
      }
    ]
  }
];
export default portfolio;