// Window Images
import first from '../images/screen-images/0.gif';
import second from '../images/screen-images/1.jpg';
import third from '../images/screen-images/2.jpg';

// Home Images
import homefirst from '../images/projects-images/Home/0.png';

// Noratech Images
import norafirst from '../images/projects-images/Noratech/0.png';
import norasecond from '../images/projects-images/Noratech/1.png';

// Almondz Images
import almondzfirst from '../images/projects-images/Almondz/0.png';

// ETech Images
import ddugufirst from '../images/projects-images/ETech/ddu0.png';

export const ScreenImages = [first, second, third];

export const ProjectsData = [
    {
        title: 'Home',
        node: 'Head',
        description: 'First Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        projects: [
            {
                image: [homefirst],
                url: "",
                projectTitle: "404.. No Project Found..",
                projectDescription: "I guess I was probably at Home, playing video games..!!",
            }
        ]
    },
    {
        title: 'Noratech (2019 - 2020)',
        node: 'Node A',
        description: 'In 2019, I started my journey by working as a Full Stack Developer in Noratech Services Private Limited where my main role was to complete my day-to-day tasks such as API Implementation using NodeJs as Backend, interaction with the database using MongoDB and working on different modules and components in Angular as Frontend. My basic understanding towards development became clearer and clearer.',
        projects: [
            {
                image: [norafirst, norasecond],
                url: "",
                projectTitle: "EduPro",
                projectDescription: "EduPro a Students Management System was designed and developed to keep track of data such as Attendance, Online Payments, Students Details, Sessions and much more.",
            }
        ]
    },
    {
        title: 'Almondz (2021)',
        node: 'Node B',
        description: 'In 2021, I started working for an MNC company Almondz where I learned the importance of team work and how the whole team maintains the consistency and keeping in mind the agenda through a daily basis scrum call as Agile methodology. It was a challenging experience to work with a team of 5 people on a big project but it was fun.',
        projects: [
            {
                image: [almondzfirst],
                url: "",
                projectTitle: "Inventory Management System",
                projectDescription: "IMS was developed as a in-house Inventory Management System that allows users to manage their inventory and make requests to the vendor for the items.",
            }
        ]
    },
    {
        title: 'ETech (2021 - 2022)',
        node: 'Node C',
        description: 'In September 2021, I was hired as a Full Stack Developer at ETech where my main responsibility was to work on many different projects as well as focusing on the development of the new features and bug fixes based on the feedback from the client. I also made many new friends who were very supportive and helpful.',
        projects: [
            {
                image: [ddugufirst],
                url: "",
                projectTitle: "DDUNAAC",
                projectDescription: "This was one of the first Government project I worked on in my career. It was a web application that was built for one of the sole purpose to keep track of the overall progress of a university all around the state using NAAC forms.",
            }
        ]
    }
]