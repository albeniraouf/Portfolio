import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Profile from "./profile.models"

export const profile: Profile = {
  experiences: [
    {
      company: { name: 'Socienta', link: 'https://socienta.com', description: 'Socienta empowers community management companies of all sizes in cutting through complexities of real-estate with a solution to serve landlords & tenants within their communities with the utmost satisfaction.' },
      title: 'Software Developer',
      description: 'Worknig as Software Developer for Socienta',
      startDate: new Date('2021-01-25'),
      coreFunctionalities: ['Software Development',],
      technologiesAndLanguages: ['Agile', 'Kubernetes', 'Linux', 'Git', 'JWT', 'Angular', 'Express', 'PostgreSQL', 'Node', 'TypeScript',]
    },
  ],
  skills: [
    { name: 'Angular', percentage: 80 },
    { name: 'Express', percentage: 95 },
    { name: 'PostgreSQL & MySQL', percentage: 80 },
    { name: 'HTML & CSS', percentage: 98 },
    { name: 'Python', percentage: 70 },
    { name: 'GIT', percentage: 85 },
    { name: 'NODE & NPM', percentage: 75 },
    { name: 'Bash', percentage: 70 },
    { name: 'C++', percentage: 75 },
    { name: 'Java', percentage: 65 },
  ],
  educations: [
    {
      college: 'Tishreen University',
      startDate: new Date('2019-09-20'),
      title: 'College',
      description: 'Bachelor of Technology - BTech, Information Engineering',
      achievements: ['Achieved 100% In ALl Programming Classes (Python, C++, OOP, JAVA)']
    },
    {
      college: 'Abdul Latif Younes Ghanem Secondary School',
      startDate: new Date('2016-09-01'),
      endDate: new Date('2019-09-01'),
      title: 'Secondary School',
      description: 'Bachelor of Science - BS, Scientific',
      achievements: ['Grade: 90%']
    }
  ],
  about: {
    name: 'Raouf Albeni',
    birthDate: new Date('2001-11-25'),
    address: 'Latakia District, Latakia Governorate, Syria',
    languages: ['English (Intermidate)','Arabic (Native Language)'],
    job: 'Software Developer',
    accounts: [
      { url: 'https://www.facebook.com/albeniraouf', website: 'Facebook', icon: faFacebook },
      { url: 'https://www.instagram.com/albeniraouf', website: 'Instagram', icon: faInstagram },
      { url: 'https://www.linkedin.com/in/albeniraouf', website: 'LinkedIn', icon: faLinkedin },
      { url: 'https://github.com/albeniraouf', website: 'Github', icon: faGithub },
      { url: 'https://twitter.com/albeniraouf', website: 'Twitter', icon: faTwitter },
    ],
    whoAmI : `<p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed tempus urna et pharetra pharetra massa massa. Aliquet nec ullamcorper sit amet risus nullam eget. Diam maecenas sed enim ut sem viverra aliquet eget sit. Tellus cras adipiscing enim eu. Vitae auctor eu augue ut lectus arcu bibendum at. Nullam eget felis eget nunc lobortis. Et egestas quis ipsum suspendisse ultrices. Suspendisse potenti nullam ac tortor vitae. Aliquet lectus proin nibh nisl condimentum id. Tempus iaculis urna id volutpat. Faucibus ornare suspendisse sed nisi. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. In est ante in nibh mauris cursus.</p>`
  },
  emails: ['raouf.albeni@gmail.com','raouf.albeni@yahoo.com','raouf.a@socienta.com',],
  phones: ['+963 949 294 811','+963 933 782 643',]
}
