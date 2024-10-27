const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://vaibhavnirmal2001.github.io/vportfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Vaibhav Nirmal',
  role: 'Full Stack Developer',
  description:
    'Hi, I am Vaibhav, a Digital Application Developer rocking it at Blue Altair. I am a passionate Software Developer with over 1.9 years of experience in full-stack development, specializing in Angular, Spring Boot, and Flutter. Currently, I’m expanding my expertise with FastAPI and ReactJS. My work at Blue Altair India Ltd. has equipped me with the skills to develop robust web and mobile applications, focusing on delivering seamless user experiences and efficient API integrations.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  'Angular',
'Spring Boot',
'REST API,',
'HTML',
'CSS',
'Flutter',
'FastAPI',
'Drupal',
'Java',
'Python',
'SQL',
'JavaScript',
'TypeScript',
'MongoDB',
'MySQL'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vaibhavnirmal2001@gmail.com',
}

export { header, about, projects, skills, contact }
