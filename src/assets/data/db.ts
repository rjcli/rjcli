import {
  TimelineObj as AcademicsObj,
  TimelineObj as ExperienceObj,
  WorkItemProps,
} from '../../types/CustomType.ts';

export const academics: AcademicsObj[] = [
  {
    date: 'July 2023 - June 2025',
    title: 'Master in Computer Science & Engineering',
    description: ['Indian Institute of Technology, Patna, Bihar.'],
    color: '#1b5f8c',
  },
  {
    date: 'Aug 2018 - May 2022',
    title: 'Bachelors in Computer Science & Engineering',
    description: [
      'Beant College of Engineering and Technology, Gurdaspur, Punjab.',
    ],
    color: '#e24a68',
  },
  {
    date: '2015 - 2017',
    title: 'Senior Secondary',
    description: ['Rajeshwar Lal College, Alinagar, Nalanda, Bihar.'],
    color: '#fbca3e',
  },
  {
    date: '2014 - 2015',
    title: 'Higher Secondary',
    description: ['Upgraded High School Lodipur, Sheikhpura, Bihar.'],
    color: '#41516c',
  },
];

export const experiences: ExperienceObj[] = [
  {
    date: 'June 2024 - May 2025',
    title: 'Intern at Intel',
    description: [
      'Enhanced front-end functionality for a mission-critical AI project by optimizing the existing UI for better performance, improving efficiency, ensuring seamless user interactions using React.',
      'Developed a new UI from scratch entirely by myself, integrating modern UI/UX principles, and wrote comprehensive unit test cases using Vitest, achieving 75% test coverage, which met the acceptance criteria set by the team.',
      'Contributed to backend integration efforts by collaborating with engineers to debug, optimize, and enhance API interactions, reducing system latency.',
    ],
    color: '#e24a68',
  },
  {
    date: 'Dec 2022 - July 2023',
    title: 'Associate Engineer at Nagarro',
    description: [
      'Upgraded a legacy enterprise application, optimizing system performance and usability.',
      'Modernized Node.js and Angular frameworks, streamlining API integration and improving UI responsiveness.',
    ],
    color: '#fbca3e',
  },
  {
    date: 'Aug 2022 - Nov 2022',
    title: 'Trainee at Nagarro',
    description: [
      'Mastered the fundamentals of web development with HTML, CSS, and JavaScript.',
      'Gained expertise in modern frontend frameworks like Angular and React.',
      'Developed proficiency in backend technologies including .NET and C#, and NodeJS.',
      'Learned to build robust web applications using the MVC architectural pattern.',
    ],
    color: '#41516c',
  },
];

export const workItems: WorkItemProps[] = [
  {
    title: 'Malware Detection using ML',
    subtitle: 'A Working Machine Learning Modal for Malware Detection',
    description:
      'A Machine Learning model for Malware Detection, built using scikit-learn. This model uses various ML algorithms like Simple KNN, Random Forest, Decision Tree, XGBoost and finally selects the best model among these algorithms according to the training accuracy.',
    link: 'https://github.com/rjcli/Malware_Detection_Using_ML',
  },
  {
    title: 'NoteTaker Full Stack Website',
    subtitle: 'A Full Stack Website for Note Taking',
    description:
      'A full-stack website created for note taking purposes. For front-end, HTML, CSS, and JS is used and for back-end, Express and NodeJS is used. For storing the notes, MongoDB is used. Also have advance features like searching a note using Title or, Body content or, according to the date created.',
    link: 'https://github.com/rjcli/toDoList-homepage',
  },
  {
    title: 'Portfolio Website using React TSX',
    subtitle:
      'A Portfolio Website to showcase my skills to employers and collaborators',
    description:
      'This portfolio website is created using React TSX. The purpose of this website is to showcase my projects, skills, and experiences to potential employers, clients, and collaborators.',
    link: 'https://github.com/rjcli/rjcli',
  },
  {
    title: 'Basic Result Management System',
    subtitle: 'A Basic Result Management System with Login and See Results',
    description:
      'This basic result management system is created using Angular and NodeJS. It provides login options for admins to add results and provides only search options students.',
    link: 'https://github.com/rjcli/result-management-system-angular',
  },
];
