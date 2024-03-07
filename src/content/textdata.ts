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
		from: 'Apr',
		to: 'Sep 2020',
		title: 'Software Engineer Intern',
		company: 'Solutions Stores Inc.',
		details: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
		skills: ['HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React']
	},
	{
		from: 'Apr',
		to: 'Sep 2019',
		title: 'Software Developer Intern',
		company: 'Polymet Solutions Corp',
		details: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
		skills: ['HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React']
	},
	{
		from: 'Sep 2019',
		to: 'May 2021',
		title: 'Executive Developer',
		company: "Queen's Web Dev Team",
		details: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
		skills: ['HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React']
	},
	{
		from: 'Sep 2020',
		to: 'May 2021',
		title: 'Undergraduate Teaching Assistant',
		company: "Queen's University",
		details: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
		skills: ['HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React']
	}
]

const timelineDataSWE: TimeLineDtl[] = [
	{
		from: 'July 2021',
		to: 'Present',
		title: '.NET Software Developer',
		company: 'FAST Enterprises LLC',
		details: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
		skills: ['C#', 'SQL', '.NET', 'Azure', 'SSO', 'AGILE', 'MSTest', 'RESTful API', 'Database Maintenance', 'Data Conversion', 'Project Management']
	},
	{
		from: 'Apr',
		to: 'Sep 2020',
		title: 'Software Engineer Intern',
		company: 'Solutions Stores Inc.',
		details: "Contributed to a virtual health clinic app for family practice clinics across Ontario in an agile team. Led a significant internship project collaborating with UI/UX Designers and Project Manager to organize Kanban boards, develop timelines, and requirements. Successfully delivered the initial phase of the app, as a SPA React app, with SASS and Bootstrap for component styling and a Flask + PostgreSQL container to securely serve endpoints as a REST API within one sprint and implemented automation for data injection in the second sprint. This resulted in a secure internal registration portal for doctors and clinics, streamlining user sign-up and verification processes without manual intervention. Designed backend infrastructure enabling clinic staff to manage virtual appointments seamlessly and integrated with mdnius for direct data transfer to the general user app.",
		skills: ['React', 'Flask', 'AWS', 'Bootstrap', 'AGILE', 'Git', 'Jira & Bitbucket', 'Python', 'Javascript', 'HTML', 'Sass', 'Typescript', 'Cypress Unit Testing', 'Twilio', 'Serverless' ]
	},
	{
		from: 'Apr',
		to: 'Sep 2019',
		title: 'Software Developer Intern',
		company: 'Polymet Solutions Corp',
		details: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
		skills: ['HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React', 'NextJS', 'HTML', 'CSS', 'React']
	}
]

const timelineDataQU: TimeLineDtl[] = [
	{
		from: 'Sep 2019',
		to: 'May 2021',
		title: 'Executive Developer',
		company: "Queen's Web Dev Team",
		details: `As Manager for a team of 4 students, I led the development of a React-powered website for a local dental practice certification company, reviewing Git pull requests, delegation of development tasks, and leading meetings with our client to document their requirements. Simultaneously, I organized and conducted weekly open-to-all seminars on current industry web development libraries and tools. My role involved providing technical guidance, and facilitating discussions to enhance the team's skills and project outcomes, resulting in a successful website launch, with minimal maintenance required and an upskilled team confident in their React skills!`,
		skills: ['React', 'CSS', 'HTML', 'Git', 'Docker', 'Firebase', 'MongoDB', 'Database Design', 'Project Management']
	},
	{
		from: 'Sep 2020',
		to: 'May 2021',
		title: 'Undergraduate Teaching Assistant',
		company: "Queen's University",
		details: `Teaching Assistant for ELEC326 - Probability & Random Processes, ELEC374 - Digital Systems Engineering. In ELEC326, I assisted Prof. Gazor in delivering course materials by leading weekly tutorials and office hours, walking through sample problems and explaining concepts that students struggled with. In ELEC374, I worked with Prof. Afsahi as a resource in the weekly Lab portion, where students would design a RISC processor in Verilog or VHDL over the semester.
		 I assisted students in translating class theory to machine code for CPU operations.`,
		skills: []
	}
]

const aboutData: AboutDtl[] = [
	{
		heading: 'The Start',
		details: "Back in 2016, with all of my attention on Calculus, I decided to try my hand at creating a Graphing Calculator app and it was my first foray into coding and creating a large-scale app for the world to use. Fast-forward to today, and after finishing my degree in Computer Engineering from Queen's University, I’ve had the privilege of building software for multiple startups, free-lancing with small businesses and working alongside a massive client, the Ministry of Finance, to provide thousands of government staff across Ontario with automated software processes in an effort to lessen their workload in serving our province and moving more of what they do to the web."
	},
	{
		heading: 'Current Day',
		details: "As I've gained experience in the field, I'm also refining my ability to lead projects with large-scale clientele and bridging the gap from business user to developer by asking questions to understand my client's requirements, while also documenting them in an easy manner for myself and other developers to understand in technical terms. I find the most enjoyment in looking back at a piece of code that I've worked on and hitting the sweet spot where human needs and software engineering meet — software that scales, is easy to follow along for other engineers and provides the most utility to my end users. In my free time, you can find me building projects that provide utility to me and any others who share my interests of gaming, EDM and long-form media content while using these as a learning experience to tinker around with new libraries, methodologies and broaden my arsenal of development skills. "
	},
	{
		heading: 'Free Time',
		details: "In the rare time I'm away from my beloved PC, I enjoy going on walks with my dog, widening my EDM sub-genre palette, hanging out with my friends and loved ones, or experimenting with a new recipe to see if it'll find a way into my kitchen classics."
	}
]

const skillsData: string[] = ['Typescript', 'React', 'NextJS', 'NodeJS', 'ExpressJS', 'Fastify', 'Angular', 'Python', 'Django', 'Flask', 'TensorFlow', 'Java', 'Spring', 'C#', '.NET', 'SQL', 'Postgres', 'MongoDB', 'HTML', 'CSS', 'Tailwind', 'Sass', 'Jest', 'Docker', 'Docker Compose', 'Nginx', 'AWS', 'Azure', 'Ubuntu', 'Git Bash', 'Version Control', 'OAuth', 'JWT', 'HTTPS', 'RESTful APIs', 'Test Automation', 'CI/CD', 'AGILE', 'Object Oriented Programming', 'DS&A']

const projects: ProjectDtl[] = [
	{
		name: 'GamesAtlas',
		description: `GamesAtlas, with over 1500 monthly users, is the ultimate way to explore the vast world of any and all video games. Using the Metacritic API for game info, my NextJS web app can provide detailed information whether you're looking for artworks, screenshots, gameplay videos, user reviews and storefront/community links to inform you before you take the plunge! Apart from the aforementioned game details, GamesAtlas has an in-depth filter
		area where you can find games that fit your parameters of platform, overall rating, release date, genre, theme, game category, and game studios. All of which can be sorted by popularity, rating, name or release date. Through the secure REST API which runs on a Dockerized ExpressJS & Typescript, PostgreSQL and Nginx container, hosted on DigitalOcean, anyone is able to sign up securely with 2FA or through an OAuth provider such as Google, Discord, Spotify, Twitch and Github. You can save games you've liked, and based on these,
		GamesAtlas provides recommendations on other titles. Users can also set game preferences, such as their platform, favorite game genre, theme and type which will provide personalised recommendations, which can be viewed on the Recommendations page.`,
		images: ['GamesAtlas/GA1.JPG', 'GamesAtlas/GA2.JPG', 'GamesAtlas/GA3.JPG', 'GamesAtlas/GA4.JPG', 'GamesAtlas/GA5.JPG', 'GamesAtlas/GA6.JPG', 'GamesAtlas/GA7.JPG', 'GamesAtlas/GA8.JPG', 'GamesAtlas/GA9.JPG', 'GamesAtlas/GA10.JPG', 'GamesAtlas/GA11.JPG', 'GamesAtlas/GA12.JPG', 'GamesAtlas/GA13.JPG', 'GamesAtlas/GA14.JPG', 'GamesAtlas/GA15.JPG', 'GamesAtlas/GA16.JPG', 'GamesAtlas/GA17.JPG', 'GamesAtlas/GA19.JPG', 'GamesAtlas/GA20.JPG', 'GamesAtlas/GA21.JPG', 'GamesAtlas/GA22.JPG', 'GamesAtlas/GA23.JPG'],
		libraries: ['React', 'NextJSv13.0', 'Typescript', 'ExpressJS', 'PostgreSQL', 'Nginx', 'Docker', 'DigitalOcean', 'Material UI', 'CSS', 'NextAuth', 'OAuth2.0', 'Axios', 'SSR', '2FA', 'SMTP', 'HTTPS', 'REST API', 'Server/Client Components', '/pages directory', 'NextJS Middleware', 'Custom Hooks', 'Context Providers', 'Responsive Design'],
		link: 'https://at.games-atlas.xyz/',
		frontend: 'https://github.com/allthetok/Gamesatlasfe',
		backend: 'https://github.com/allthetok/GamesAtlas'
	},
	{
		name: 'AT Kicks',
		description: `AT Kicks is a proof of concept ECommerce storefront that specializes in trendy footwear. The frontend was built with NextJS for speedy Server-side rendering, Typescript for data uniformity, Tailwind for quick and easy styling and Stripe for a secure checkout with Stripe, while secure endpoints, store inventory and user authentication are managed by the Dockerized Fastify & Typescript, PostgreSQL and Caddy container as a REST API, hosted on DigitalOcean. With data scraped from official retailers, ATKicks has over 
		has detailed product information for 30+ different type of shoes and a large array of colorways. You can search for shoes, and if you're unsure of what to look for, the Products page provides a way to filter all shoes based on Brands, Model Types and Shoe Editions, here you can also sort based on the name, release date and price. Anybody can sign up with 2FA or through your favorite OAuth provider, for an in-depth account page to keep track of all your orders. Meanwhile Stripe provides an easy way 
		to keep track of your cart with cart activity being displayed by Toast notifications, provide a secure Checkout with custom branding and email invoices upon successful payment.`,
		images: ['ATKicks/AK1.JPG', 'ATKicks/AK2.JPG', 'ATKicks/AK3.JPG', 'ATKicks/AK4.JPG', 'ATKicks/AK5.JPG', 'ATKicks/AK6.JPG', 'ATKicks/AK7.JPG', 'ATKicks/AK8.JPG', 'ATKicks/AK9.JPG', 'ATKicks/AK10.JPG', 'ATKicks/AK11.JPG', 'ATKicks/AK12.JPG', 'ATKicks/AK13.JPG', 'ATKicks/AK14.JPG', 'ATKicks/AK16.JPG', 'ATKicks/AK17.JPG', 'ATKicks/AK18.JPG', 'ATKicks/AK19.JPG'],
		libraries: ['React', 'NextJSv14.0', 'Typescript', 'Fastify', 'PostgreSQL', 'Caddy (proxy)', 'Docker', 'Docker Compose', 'DigitalOcean', 'Material UI', 'CSS', 'TailwindCSS', 'Stripe', 'Toast', 'NextAuth', 'OAuth2.0', 'Axios', 'SSR', '2FA', 'SMTP', 'HTTPS', 'REST API', 'Server/Client Components', '/app directory', 'Custom Hooks', 'Context Providers', 'Responsive Design'],
		link: 'https://atkicks.allentok.com/',
		frontend: 'https://github.com/allthetok/FrontEndEC',
		backend: 'https://github.com/allthetok/Ecommerce'
	},
	{
		name: 'PodFinder',
		description: `PodFinder is a podcast directory web app, leveraging the PodChaser API for data and powered on the frontend by React, MaterialUI for simple components and React Router for the frontend with a secure ExpressJS + PostgreSQL REST API. PodFinder provides detailed information for any podcast in the world, and also the newest or most viewed episodes, which can be viewed and listened to directly on the app.
		Through the Explore page, you can find the most popular, newest or trending podcasts and individual episodes in the world right now. Additionally, upon signing up and completing the 2FA authentication process, you can add podcasts, or episodes to your list which can are found on your Likes page. Based on podcasts and episodes you like, it also provides personalised recommendations for similar-themed podcasts and episodes.`,
		images: ['PodFinder/PF1.JPG', 'PodFinder/PF2.JPG', 'PodFinder/PF3.JPG', 'PodFinder/PF4.JPG', 'PodFinder/PF5.JPG', 'PodFinder/PF6.JPG', 'PodFinder/PF7.JPG', 'PodFinder/PF8.JPG', 'PodFinder/PF9.JPG', 'PodFinder/PF10.JPG', 'PodFinder/PF11.JPG', 'PodFinder/PF12.JPG', 'PodFinder/PF13.JPG'],
		libraries: ['React', 'React Router', 'Typescript', 'ExpressJS', 'PostgreSQL', 'ElephantSQL', 'Material UI', 'CSS', 'Brevo', 'Native Auth', 'Axios', '2FA', 'SMTP', 'HTTPS', 'REST API', 'Custom Hooks', 'Context Providers', 'Responsive Design'],
		link: 'https://github.com/allthetok/PodApp',
		frontend: 'https://github.com/allthetok/PodApp',
		backend: 'https://github.com/allthetok/PodApp/tree/main/api'
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

export { timelineData, timelineDataSWE, timelineDataQU, aboutData, skillsData, projects, links, aboutImages }