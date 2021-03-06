const data = [
    {
        id: 0,
        title: "Engauge",
        description: "Engauge encompasses the MERN stack that records tracks and lists oil and gas well information that is data driven",
        webLink: "https://serene-meadow-56536.herokuapp.com/",
        gitLink: "https://github.com/Dgarza0413/engauge",
        image: require("./img/engauge.png"),
        imageGallery: [],
        technologies: [
            "react",
            "mongodb",
            "express",
            "nodejs",
            "mongoose",
            "passport",
            "bootstrap",
            "data visual",
            "momentjs"
        ],
        category: "primary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
    {
        id: 1,
        title: "Wooden Spoon",
        description: "An all in one application recipe forum that can search receipes and retrieve ingredients, steps, and kitchen that will be needed for use within a vast API structure. Technologies utilized within this application are javascript/ajax calls and google firebase for recipe storage",
        webLink: "https://still-stream-54250.herokuapp.com/",
        gitLink: "https://github.com/Dgarza0413/wooden-spoon",
        image: require('./img/wooden-spoon.png'),
        imageGallery: [],
        technologies: [
            "javascript",
            "jquery",
            "api",
            "spoonacular"
        ],
        category: "primary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
    {
        id: 2,
        title: "YelpCamp",
        description: "Yelpcamp is a campgrounds forum that utilizes a full-stack of mongodb, express, and node to control the flow of authentication of users and campgrounds that users can post and manage",
        webLink: "https://yelpcampdestination.herokuapp.com/",
        gitLink: "https://github.com/Dgarza0413/yelp-camp",
        image: "https://res.cloudinary.com/davidgarza/image/upload/v1608666336/portfolio/yelpcamp-front_kxo7zv.png",
        imageGallery: [
            "https://res.cloudinary.com/davidgarza/image/upload/v1608664302/portfolio/yelpcamp-0_fv2dwl.png",
            "https://res.cloudinary.com/davidgarza/image/upload/v1608664301/portfolio/yelpcamp-1_s67qth.png",
            "https://res.cloudinary.com/davidgarza/image/upload/v1608664300/portfolio/yelpcamp-2_smqwxo.png",
            "https://res.cloudinary.com/davidgarza/image/upload/v1608664452/portfolio/yelpcamp-3_ue9wb9.png"
        ],
        technologies: [
            "javascript",
            "jquery",
            "ejs",
            "mongodb",
            "nodejs"
        ],
        category: "primary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
    {
        id: 3,
        title: "Vue Share",
        description: "A photography sharing forum app that applies use of apollo server 2 and apollo boast, writing queries with graphql language and client and server side and using vue and vuex for functionality",
        webLink: "https://vue-share-ogni3dm4u.now.sh/",
        gitLink: "https://github.com/Dgarza0413/vue-share",
        image: "https://res.cloudinary.com/davidgarza/image/upload/v1608671110/portfolio/vueshare-front_wgatr7.png",
        imageGallery: [
            "https://res.cloudinary.com/davidgarza/image/upload/v1609095738/portfolio/vueshare-1_wjtavv.png",
            "https://res.cloudinary.com/davidgarza/image/upload/v1609095740/portfolio/vueshare-2_frmbfl.png",
            "https://res.cloudinary.com/davidgarza/image/upload/v1609095741/portfolio/vueshare-0_juj7fi.png"
        ],
        technologies: [
            "javascript",
            "vue",
            "apollo",
            "graphql"
        ],
        category: "primary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
    {
        id: 4,
        title: "Heroes United",
        description: "A SQL, Express, and Javascript stack application Heroes United is a turn based game vs AI that is complete with user login and character customization",
        webLink: "https://heroesunited.herokuapp.com/",
        gitLink: "https://github.com/elaintran/heroes-united",
        image: require("./img/heroesunited.png"),
        imageGallery: [],
        technologies: [
            "javascript",
            "sequelize",
            "mysql",
            "nodejs",
            "express"
        ],
        category: "primary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
    {
        id: 5,
        title: "Tetris",
        description: "A react app that places emphasis on hooks to render a grid and create tetrominos to clone a tetris like game",
        webLink: "https://hidden-wildwood-98211.herokuapp.com",
        gitLink: "https://github.com/Dgarza0413/tetris-react",
        image: require('./img/tetris.png'),
        imageGallery: [],
        technologies: ["styled components", "react", "javascript"],
        category: "secondary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
    {
        id: 6,
        title: "Atsy",
        description: "A mern stack e-commerce application that allows user authentication and payment processes.",
        webLink: "https://atsy.herokuapp.com",
        gitLink: "https://github.com/Dgarza0413/atsy",
        image: "https://res.cloudinary.com/davidgarza/image/upload/v1608681488/portfolio/atsy-front_nd70x6.png",
        imageGallery: [
            "https://res.cloudinary.com/davidgarza/image/upload/v1609183218/portfolio/atsy-0_zdfzcn.png",
            "https://res.cloudinary.com/davidgarza/image/upload/v1609183217/portfolio/atsy-1_wzvb8l.png",
            "https://res.cloudinary.com/davidgarza/image/upload/v1609183217/portfolio/atsy-2_wsmbuh.png",
            "https://res.cloudinary.com/davidgarza/image/upload/v1609183217/portfolio/atsy-3_acppbk.png",
            "https://res.cloudinary.com/davidgarza/image/upload/v1609183217/portfolio/atsy-4_r5jtnd.png"
        ],
        technologies: [
            "mongodb",
            "express",
            "nodejs",
            "react",
            "stripejs",
            "jsonwebtokens",
            "semanticui"
        ],
        category: "primary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
    {
        id: 7,
        title: "Trivia Pursuit",
        description: "Using JavaScript for the logic and jQuery to manipulate HTML and settimers, this project is science trivia where you answer against the clock for more points",
        webLink: "https://agile-citadel-38649.herokuapp.com/",
        gitLink: "https://github.com/Dgarza0413/trivia-pursuit",
        image: require("./img/science-trivia.png"),
        imageGallery: [],
        technologies: [
            "javascript",
            "html",
            "css",
            "jquery",
            "api"
        ],
        category: "secondary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
    {
        id: 10,
        title: "Giftastic",
        description: "This app makes use of the GIPHY API and ajax calls tomake a dynamic web page that populates with gifs of your choice",
        webLink: "https://giftasticapp.herokuapp.com/",
        gitLink: "https://github.com/Dgarza0413/giftastic",
        image: require("./img/giftastic.png"),
        imageGallery: [],
        technologies: [
            "javascript",
            "html",
            "css",
            "api",
            "giphy",
            "ajax"
        ],
        category: "secondary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
    {
        id: 11,
        title: "Crystal Collector",
        description: "Using jquery and html dom updates we have a player guess the answer through selecting a randomized number represented by a crystal. Add the numbers up to reach the answer exactly",
        webLink: "https://tranquil-wildwood-80006.herokuapp.com/",
        gitLink: "https://github.com/Dgarza0413/crystal-collector",
        image: require("./img/crystal-collector.png"),
        imageGallery: [],
        technologies: [
            "javascript",
            "html",
            "css",
            "jquery"
        ],
        category: "secondary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
    {
        id: 12,
        title: "All Aboard",
        description: "A train scheduler that incorporates firebase to display arrival and departure data. Additional tech is moment.js for calculating differences in time and display of them",
        webLink: "https://boiling-hollows-13980.herokuapp.com/",
        gitLink: "https://github.com/Dgarza0413/all-aboard",
        image: require("./img/all-board.png"),
        imageGallery: [],
        technologies: [
            "javascript",
            "html",
            "css",
            "jquery",
            "firebase",
            "momentjs"
        ],
        category: "secondary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
    {
        id: 13,
        title: "Liri",
        description: "Having no website of its own. This project uses backend tech node to pass in information into the CLI and retrieve api information using axios and displaying onto the terminal",
        webLink: "https://drive.google.com/file/d/16DyM-CzdWtvI3yC0jHLL8RQi6jYihhgB/view",
        gitLink: "https://github.com/Dgarza0413/liri",
        image: require("./img/liri.png"),
        imageGallery: [],
        technologies: [
            "javascript",
            "html",
            "css",
            "nodejs",
            "axios",
        ],
        category: "secondary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
    {
        id: 14,
        title: "Bamazon",
        description: "An example of having no website of its own. This project uses backend tech node to pass in information into the CLI and call and request data from mysql",
        webLink: "",
        gitLink: "https://github.com/Dgarza0413/bamazon",
        image: require("./img/bamazonCustomer.png"),
        imageGallery: [],
        technologies: [
            "javascript",
            "html",
            "css",
            "nodejs",
            "axios",
            "mysql"
        ],
        category: "secondary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
    // {
    //     id: 15,
    //     title: "Friend Finder",
    //     description: "We will use express to handle client-side requests to respond with a matched person that share calculated scores",
    //     webLink: "",
    //     gitLink: "https://github.com/Dgarza0413/friend-finder",
    //     image: "",
    //     imageGallery: [],
    //     technologies: [
    //         "javascript",
    //         "html",
    //         "css",
    //         "nodejs",
    //         "express",
    //         "jquery"
    //     ],
    //     category: "secondary",
    //     position: {
    //         type: "personal",
    //         company: "",
    //         title: ""
    //     }
    // },
    {
        id: 16,
        title: "Task Manager",
        description: "using the mvc model to map and field our data we create an express and mySQL app to update remove and add tasks onto our webpage.",
        webLink: "https://serene-island-73007.herokuapp.com/",
        gitLink: "https://github.com/Dgarza0413/reminder-tracker",
        image: require("./img/task-manager.png"),
        imageGallery: [],
        technologies: [
            "javascript",
            "css",
            "nodejs",
            "express",
            "jquery",
            "mysql"
        ],
        category: "secondary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
    {
        id: 17,
        title: "Mongo Scraper",
        description: "Using Cheerio, this application demonstrates mongooses capabilities to pull data from front end applications and in this case, a news site",
        webLink: "https://tranquil-refuge-51439.herokuapp.com/",
        gitLink: "https://github.com/Dgarza0413/mongo-scraper",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
        imageGallery: [],
        technologies: [
            "javascript",
            "css",
            "nodejs",
            "express",
            "mongoose",
            "mongodb"
        ],
        category: "secondary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
    {
        id: 18,
        title: "Clicky Game",
        description: "A react app that focuses on state, class components, and functional components to build a game that tracks randomized squares with a score",
        webLink: "https://dgarza0413.github.io/clicky-game/",
        gitLink: "https://github.com/Dgarza0413/clicky-game",
        image: require('./img/clicky-game.png'),
        imageGallery: [],
        technologies: [
            "javascript",
            "css",
            "react"
        ],
        category: "secondary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
    {
        id: 19,
        title: "PataTap Clone",
        description: "This application requires the user to press keys to pass in events to randomize circles as sounds play. Enjoy",
        webLink: "https://frozen-temple-21076.herokuapp.com/",
        gitLink: "https://github.com/Dgarza0413/patatap-clone",
        image: require("./img/patatap-clone.png"),
        imageGallery: [],
        technologies: [
            "html",
            "javascript",
            "css",
            "jquery"
        ],
        category: "secondary",
        position: {
            type: "personal",
            company: "",
            title: ""
        }
    },
]

export default data