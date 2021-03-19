const projectsData = [
    {
        title: 'Webpage Resume',
        screenshots: [
            '/images/screenshot/resume2.jpg',
            '/images/screenshot/resume3.jpg',
            '/images/screenshot/resume4.jpg',
        ],
        shortDescription: 'Personal Project',
        description: "It's a portfolio of projects. Originaly, it was made with HTML/CSS, Javascript and Jquery only. And I changed it to be a frontend react app.",
        skills: ['Javascript', 'HTML', 'CSS', 'ReactJs'],
        haveRepo: true,
        haveWebsite: true,
        repo: 'https://github.com/ptrickd/resume',
        website: 'https://main--silly-almeida-71acd2.netlify.app/'
    },
    {
        title: 'Catalog Of Projects',
        screenshots: [
            '/images/screenshot/catalog1.jpg',
            '/images/screenshot/catalog3.jpg',
            '/images/screenshot/catalog4.jpg',
        ],
        description: "This app has been created with a goal in mind to showcase the projects of the EvolveU learners.",
        shortDescription: 'Team of 4',
        skills: ['Javascript', 'ReactJs', 'NodeJs', 'MongoDb', 'JWT'],
        haveRepo: false,
        haveWebsite: true,
        repo: 'Not yet available',
        website: 'https://evolveu-projects.herokuapp.com/'
    },
    {
        title: 'Communication Resident/Building Manager',
        screenshots: [
            '/images/screenshot/homy1.jpg',
            '/images/screenshot/homy3.jpg',
            '/images/screenshot/homy4.jpg',
        ],
        description: "This project is about to create an app to connect the residents and the manager in a multi-tenant building.",
        shortDescription: 'Team of 6',
        skills: ['Agile', 'Javascript', 'ReactJs', 'NodeJs', 'MongoDb', 'Jest', 'JWT', 'Stripe'],
        haveRepo: true,
        haveWebsite: true,
        repo: 'https://github.com/raquelm9/Homy',
        website: 'https://adoring-leakey-4abb67.netlify.app/'
    }
]

export default projectsData;