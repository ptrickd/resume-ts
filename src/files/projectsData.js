const projectsData = [
    {
        title: 'Kitchen Inventory',
        screenshotsNum: 1,
        screenshots: [
            '/images/screenshot/inventory1.jpg',
        ],
        shortDescription: 'Personal Project',
        description: "The goal of this projects it is to provide a free and open source alternative for chef in restaurant to make and keep track of their inventory without using pen and paper",
        skills: [
            'Typescript', 'NextJs', 'API', 'Material UI', 'React-Hook-Form',
            'Luxon', 'Mongoose', 'GraphQL',
            'HTML', 'CSS', 'useContext'
        ],
        haveRepo: true,
        haveWebsite: false,
        repo: 'https://github.com/ptrickd/inventory-app',
        website: 'https://main--silly-almeida-71acd2.netlify.app/'
    },
    {
        title: 'Webpage Resume',
        screenshotsNum: 3,
        screenshots: [
            '/images/screenshot/resume2.jpg',
            '/images/screenshot/resume3.jpg',
            '/images/screenshot/resume4.jpg',
        ],
        shortDescription: 'Personal Project',
        description: "It's a portfolio of projects. It changed overtime. Now it use ReactJS, Typescript and Material UI",
        skills: [
            'Typescript', 'ReactJs', 'Material UI',
            'HTML', 'CSS', 'Netlify', 'Styled-Components'
        ],
        haveRepo: true,
        haveWebsite: true,
        repo: 'https://github.com/ptrickd/resume',
        website: 'https://main--silly-almeida-71acd2.netlify.app/'
    },
    {
        title: 'Catalog Of Projects',
        screenshotsNum: 3,
        screenshots: [
            '/images/screenshot/catalog1.jpg',
            '/images/screenshot/catalog3.jpg',
            '/images/screenshot/catalog4.jpg',
        ],
        description: "This app has been created with a goal in mind to showcase the projects of the EvolveU learners.",
        shortDescription: 'Team of 4',
        skills: [
            'Javascript', 'ReactJs',
            'NodeJs', 'MongoDb', 'JWT',
            'Redux', 'TalwindCSS', 'Heroku',
            'React Router'
        ],
        haveRepo: false,
        haveWebsite: true,
        repo: 'Not yet available',
        website: 'https://evolveu-projects.herokuapp.com/'
    },
    {
        title: 'Building Manager',
        screenshotsNum: 3,
        screenshots: [
            '/images/screenshot/homy1.jpg',
            '/images/screenshot/homy3.jpg',
            '/images/screenshot/homy4.jpg',
        ],
        description: "This project is about to create an app to connect the residents and the manager in a multi-tenant building.",
        shortDescription: 'Team of 6',
        skills: [
            'Javascript', 'ReactJs',
            'MongoDB', 'NodeJs',
            'Jest', 'Agile',
            'JWT', 'Stripe',
            'Redux', "Twilio",
            "Google Api", 'Bootstrap',
            'Heroku', 'Netlify',
            'Formik', 'Agile',
            'React Router'
        ],
        haveRepo: true,
        haveWebsite: true,
        repo: 'https://github.com/raquelm9/Homy',
        website: 'https://adoring-leakey-4abb67.netlify.app/'
    },
    // {
    //     title: 'Desktop Staff Scheduler',
    //     screenshotsNum: 1,
    //     screenshots: [
    //         '/images/screenshot/scheduler1.jpg'
    //     ],
    //     description: "This project is about to create a desktop app to help schedule staff in commercial kitchen",
    //     shortDescription: 'Personal',
    //     skills: [
    //         'Python', 'SQLite',
    //         'TKinter', 'Desktop App'
    //     ],
    //     haveRepo: true,
    //     haveWebsite: false,
    //     repo: 'https://github.com/ptrickd/scheduler',
    //     website: ''
    // },
    {
        title: 'Mobile App Projects Catalog',
        screenshotsNum: 1,
        screenshots: [
            '/images/screenshot/react-native1.jpg',
        ],
        description: "This project is the continuation of the projects catalog, with a react-native mobile app to get access to the API",
        shortDescription: 'Personal',
        skills: [
            'React Native', 'React Navigation',
            'Android Studio', 'Mobile'
        ],
        haveRepo: true,
        haveWebsite: false,
        repo: 'https://github.com/ptrickd/projects_catalog_rn',
        website: ''
    },
    {
        title: 'Flask PostgreSQL Server ',
        screenshotsNum: 3,
        screenshots: [
            '/images/screenshot/catalog1.jpg',
            '/images/screenshot/catalog3.jpg',
            '/images/screenshot/flask1.jpg'
        ],
        description: "This project use the Catalog Of Projects react app but is using a Python/Flask/Postgres backend",
        shortDescription: 'Personal',
        skills: [
            'Python', 'Flask',
            'PostgreSQL', 'SQLAlchemy',
            'SQL', 'React',
            'Flask Restful', 'Flask-Bcrypt',
            'PyJWT'
        ],
        haveRepo: true,
        haveWebsite: false,
        repo: 'https://github.com/ptrickd/flask-postgres-server',
        website: ''
    }
]

export default projectsData;