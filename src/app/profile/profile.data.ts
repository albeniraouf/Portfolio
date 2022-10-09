import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faUniversity, faSchool } from '@fortawesome/free-solid-svg-icons';
import Profile from './profile.models';

export const profile: Profile = {
  experiences: [
    {
      company: {
        name: 'Socienta',
        link: 'https://socienta.com',
        image: 'assets/resources/experience/socienta.png',
        imageStyle: 'width: 50% !important',
        description:
          'Socienta empowers community management companies of all sizes in cutting through complexities of real-estate with a solution to serve landlords & tenants within their communities with the utmost satisfaction.',
        showName: false,
      },
      title: 'Software Developer',
      startDate: new Date('2021-08-25'),
      coreFunctionalities: ['Software Development'],
      technologiesAndLanguages: [
        'Agile',
        'Kubernetes',
        'Linux',
        'Git',
        'JWT',
        'Angular',
        'Express',
        'PostgreSQL',
        'Node',
        'TypeScript',
      ],
    },
    {
      company: {
        name: 'GATE Library',
        link: '',
        image: 'assets/resources/experience/gateLib.png',
        imageStyle: 'width: unset !important; height: 10rem !important',
        description:
          'Gate Library is focused on preparing high quality and precise lectures for the Faculty of Informatics Engineering at Tishreen University.',
        showName: false,
      },
      title: 'Programming Languages Lectures Writer',
      startDate: new Date('2021-03-25'),
      endDate: new Date('2021-08-25'),
      coreFunctionalities: ['Lectures Writing'],
      technologiesAndLanguages: ['JAVA', 'Microsoft Word'],
    },
    {
      company: {
        name: 'Code Library',
        link: '',
        image: 'assets/resources/experience/codeLib.png',
        imageStyle: 'width: unset !important; height: 12rem !important',
        description:
          'Code Library is focused on preparing high quality and precise lectures for the Faculty of Informatics Engineering at Tishreen University.',
        showName: false,
      },
      title: 'Programming Languages Lectures Writer',
      startDate: new Date('2020-03-25'),
      endDate: new Date('2021-03-26'),
      coreFunctionalities: ['Lectures Writing'],
      technologiesAndLanguages: ['Python', 'C++', 'OOP', 'Microsoft Word'],
    },
    {
      company: {
        name: 'Programming Languages Tutor',
        link: '',
        image: 'assets/resources/experience/teacher.png',
        imageStyle: 'width: unset !important; height: 12rem !important',
        description: `I've worked as a private teacher for programming languages, following the curricula of Tishreen University.`,
        showName: true,
      },
      title: 'Programming Languages Tutor',
      startDate: new Date('2020-03-24'),
      endDate: new Date('2021-08-24'),
      coreFunctionalities: ['Programming Languages Teaching'],
      technologiesAndLanguages: ['Python', 'C++', 'OOP', 'JAVA'],
    },
  ],
  skills: [
    'Angular',
    'Bash',
    'Express',
    'PostgreSQL',
    'MySQL',
    'HTML',
    'CSS',
    'Python',
    'OOP',
    'GIT',
    'NODE',
    'NPM',
    'C++',
    'Java',
    'Typescript',
    'PHP',
    'Laravel',
    'Linux',
    'Wordpress',
    'MS Office',
    'RxJS',
  ],
  educations: [
    {
      college: 'Tishreen University',
      icon: faUniversity,
      startDate: new Date('2019-09-20'),
      title: 'College',
      description: 'Bachelor of Technology - BTech, Information Engineering',
      achievements: [
        'Achieved 100% In All Programming Classes (Python, C++, OOP, JAVA)',
      ],
    },
    {
      college: 'Local Secondary School',
      icon: faSchool,
      startDate: new Date('2016-09-01'),
      endDate: new Date('2019-09-02'),
      title: 'Secondary School',
      description: 'Bachelor of Science - BS, Scientific',
      achievements: ['Grade: 90%'],
    },
  ],
  about: {
    name: 'Raouf Zeid Albeni',
    birthDate: new Date('2001-11-25'),
    address: 'Latakia, Syria',
    addressOnMap: 'https://goo.gl/maps/zyeamzULeKxQcNz66',
    languages: ['Arabic (Native Language)', 'English (Intermidate)'],
    job: 'Software Developer',
    accounts: [
      {
        url: 'https://www.facebook.com/albeniraouf',
        website: 'Facebook',
        icon: faFacebook,
      },
      {
        url: 'https://www.instagram.com/albeniraouf',
        website: 'Instagram',
        icon: faInstagram,
      },
      {
        url: 'https://www.linkedin.com/in/albeniraouf',
        website: 'LinkedIn',
        icon: faLinkedin,
      },
      {
        url: 'https://github.com/albeniraouf',
        website: 'Github',
        icon: faGithub,
      },
      {
        url: 'https://twitter.com/albeniraouf',
        website: 'Twitter',
        icon: faTwitter,
      },
    ],
    whoAmI: `<p align="justify">I'm an information engineering student.<br>
    I work as a software developer especially in web development.<br>
    I'm very passionate, fast learner, multitasker and  hardworker.<br>
    I started my career while studying, I started as a programming languages courses teacher, and I was writing programming lectures.<br>
    Then I've started working at Socienta as a software developer, mainly in Angular, Node, Express and PostgreSQL</p>`,
  },
  emails: [
    'raouf.albeni@gmail.com',
    'raouf.albeni@yahoo.com',
    'raouf.a@socienta.com',
  ],
  phones: ['+963 949 294 811', '+963 981 241 453'],
};
