/* eslint-disable quotes */
import { AboutDtl, ProjectDtl, TimeLineDtl } from '@/helpers/types'

const timelineData: TimeLineDtl[] = [
	{
		from: 'July 2021',
		to: 'Present',
		title: '.NET Software Developer',
		company: 'FAST Enterprises LLC',
		details: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
		skills: ['HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React']
	},
	{
		from: 'April 2020',
		to: 'September 2020',
		title: 'Software Engineer Intern',
		company: 'Solutions Stores Inc.',
		details: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
		skills: ['HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React']
	},
	{
		from: 'September 2019',
		to: 'May 2021',
		title: 'Executive Developer',
		company: "Queen's Web Dev Team",
		details: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
		skills: ['HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React']
	},
	{
		from: 'July 2021',
		to: 'Present',
		title: 'Full Stack Developer Intern',
		company: 'Polymet Solutions Corp',
		details: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
		skills: ['HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React']
	},
	{
		from: 'September 2020',
		to: 'April 2021',
		title: 'Undergraduate Teaching Assistant',
		company: "Queen's University",
		details: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
		skills: ['HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React']
	}
]

const aboutData: AboutDtl[] = [
	{
		heading: 'My Experience',
		details: "Back in 2016, with all of my attention on high school Calculus, I decided to try my hand at creating a Graphing Calculator app and it was my first foray into coding and creating my first large-scale app for the world to use. Fast-forward to today, and upon completing my Undergraduate in Computer Engineering from Queen's University, I’ve had the privilege of building software for multiple startups, free-lancing with small businesses and working alongside a massive client, the Ministry of Finance, to provide thousands of government staff across Ontario with automated software processes in an effort to lessen their workload in serving our province and moving more of what they do to the web."
	},
	{
		heading: 'My Experience 2',
		details: "As I've gained experience in the field, I'm also refining my ability to lead projects with large-scale clientele and bridging the gap from business user to developer by asking questions to understand my client's requirements, while also documenting them in an easy manner for myself and other developers to understand in technical terms. I find the most enjoyment in looking back at a piece of code that I've worked on and hitting the sweet spot where human needs and software engineering meet — software that scales, is easy to follow along for other engineers and provides the most utility to my end users. In my free time, you can find me building projects that provide utility to me and any others who share my interests of gaming, EDM and long-form media content while using these as a learning experience to tinker around with new libraries, methodologies and broaden my arsenal of development skills. "
	},
	{
		heading: 'My Experience 3',
		details: "In the rare time I'm away from my beloved PC, I enjoy going on walks with my dog, widening my EDM sub-genre palette, hanging out with my friends and loved ones, or experimenting with a new recipe to see if it'll find a way into my kitchen classics."
	}
]

const skillsData: string[] = ['Typescript', 'React', 'NextJS', 'NodeJS', 'ExpressJS', 'Fastify', 'Angular', 'Python', 'Django', 'Flask', 'TensorFlow', 'Java', 'Spring', 'C#', '.NET', 'SQL', 'Postgres', 'MongoDB', 'HTML', 'CSS', 'Tailwind', 'Sass', 'Jest', 'Docker', 'Docker Compose', 'AWS', 'Azure', 'Git Bash', 'Version Control', 'OAuth', 'JWT', 'HTTPS', 'RESTful APIs', 'Test Automation', 'CI/CD', 'AGILE', 'Object Oriented Programming', 'Data Structures & Algorithms']

const projects: ProjectDtl[] = [
	{
		name: 'GamesAtlas',
		description: "I'm a passionate software engineer with over 5 years of experience in the field. I thrive on turning ideas into reality through elegant and efficient code. My journey in software development has led me through various projects, each one teaching me new skills and pushing the boundaries of what's possible. In my 5 years in the industry, I've honed my skills in [mention specific technologies or areas you specialize in, e.g., full-stack development, front-end frameworks like Angular, back-end with Node.js, etc.]. I've had the pleasure of working on diverse projects, from developing scalable web applications to optimizing database performance. Each project has been a learning experience, refining my problem-solving abilities and attention to detail.",
		images: ['GamesAtlas/GA1.JPG', 'GamesAtlas/GA2.JPG', 'GamesAtlas/GA3.JPG', 'GamesAtlas/GA4.JPG', 'GamesAtlas/GA5.JPG', 'GamesAtlas/GA6.JPG', 'GamesAtlas/GA7.JPG', 'GamesAtlas/GA8.JPG', 'GamesAtlas/GA9.JPG', 'GamesAtlas/GA10.JPG', 'GamesAtlas/GA11.JPG', 'GamesAtlas/GA12.JPG', 'GamesAtlas/GA13.JPG', 'GamesAtlas/GA14.JPG', 'GamesAtlas/GA15.JPG', 'GamesAtlas/GA16.JPG', 'GamesAtlas/GA17.JPG', 'GamesAtlas/GA19.JPG', 'GamesAtlas/GA20.JPG', 'GamesAtlas/GA21.JPG', 'GamesAtlas/GA22.JPG', 'GamesAtlas/GA23.JPG'],
		libraries: ['HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React'],
		link: 'https://at.games-atlas.xyz/',
		frontend: 'https://github.com/allthetok/Gamesatlasfe',
		backend: 'https://github.com/allthetok/GamesAtlas'
	},
	{
		name: 'AT Kicks',
		description: "I'm a passionate software engineer with over 5 years of experience in the field. I thrive on turning ideas into reality through elegant and efficient code. My journey in software development has led me through various projects, each one teaching me new skills and pushing the boundaries of what's possible. In my 5 years in the industry, I've honed my skills in [mention specific technologies or areas you specialize in, e.g., full-stack development, front-end frameworks like Angular, back-end with Node.js, etc.]. I've had the pleasure of working on diverse projects, from developing scalable web applications to optimizing database performance. Each project has been a learning experience, refining my problem-solving abilities and attention to detail.",
		images: ['ATKicks/AK1.JPG', 'ATKicks/AK2.JPG', 'ATKicks/AK3.JPG', 'ATKicks/AK4.JPG', 'ATKicks/AK5.JPG', 'ATKicks/AK6.JPG', 'ATKicks/AK7.JPG', 'ATKicks/AK8.JPG', 'ATKicks/AK9.JPG', 'ATKicks/AK10.JPG', 'ATKicks/AK11.JPG', 'ATKicks/AK12.JPG', 'ATKicks/AK13.JPG', 'ATKicks/AK14.JPG', 'ATKicks/AK16.JPG', 'ATKicks/AK17.JPG', 'ATKicks/AK18.JPG', 'ATKicks/AK19.JPG'],
		libraries: ['HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React'],
		link: 'https://atkicks.allentok.com/',
		frontend: 'https://github.com/allthetok/FrontEndEC',
		backend: 'https://github.com/allthetok/Ecommerce'
	},
	{
		name: 'PodFinder',
		description: "I'm a passionate software engineer with over 5 years of experience in the field. I thrive on turning ideas into reality through elegant and efficient code. My journey in software development has led me through various projects, each one teaching me new skills and pushing the boundaries of what's possible. In my 5 years in the industry, I've honed my skills in [mention specific technologies or areas you specialize in, e.g., full-stack development, front-end frameworks like Angular, back-end with Node.js, etc.]. I've had the pleasure of working on diverse projects, from developing scalable web applications to optimizing database performance. Each project has been a learning experience, refining my problem-solving abilities and attention to detail.",
		images: ['PodFinder/PF1.JPG', 'PodFinder/PF2.JPG', 'PodFinder/PF3.JPG', 'PodFinder/PF4.JPG', 'PodFinder/PF5.JPG', 'PodFinder/PF6.JPG', 'PodFinder/PF7.JPG', 'PodFinder/PF8.JPG', 'PodFinder/PF9.JPG', 'PodFinder/PF10.JPG', 'PodFinder/PF11.JPG', 'PodFinder/PF12.JPG', 'PodFinder/PF13.JPG'],
		libraries: ['HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React'],
		link: 'https://github.com/allthetok/PodApp',
		frontend: 'https://github.com/allthetok/PodApp',
		backend: 'https://github.com/allthetok/PodApp'
	}
]

const links = [
	{
		name: 'Home',
		hash: '#home'
	},
	{
		name: 'Personal',
		hash: '#about'
	},
	{
		name: 'Work',
		hash: '#work'
	},
	{
		name: 'Projects',
		hash: '#projects'
	},
	{
		name: 'Contact',
		hash: '#contact'
	},
]

const aboutImages = [
	'about/1.jpg', 'about/5.JPG', 'about/6.png', 'about/8.png'
]

export { timelineData, aboutData, skillsData, projects, links, aboutImages }