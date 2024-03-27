/* eslint-disable quotes */
import { AboutDtl, ProjectDtl, TimeLineDtl } from '@/helpers/types'

const timelineData: TimeLineDtl[] = [
	{
		from: 'June 2021',
		to: 'Present',
		title: '.NET Software Developer',
		company: 'FAST Enterprises LLC',
		details: "Dev Team Manager on the maintenance of the Portable Housing and Healthy Smiles Provincial Benefit Programs with client, the Ontario Ministry of Finance (MOF). Lead developer on new Interac payment functionality by integrating helper class to systematically calculate and route funds to MOL bank accounts, with existing payment routes in REST API on C# .NET framework, fortified by unit testing in MSTest, processing $2M+ and removing manual calculation by MOF staff. Led meetings with MOL staff to gather business requirements for the subsequent Payment Remittance Report, aiding the MOF in reconciling mailed payments with system-allocated results, developed using an efficient PostgreSQL query. I streamlined user authentication by implementing single sign-on (SSO) on our Dockerized REST API containers hosted on Azure, reducing automated 2FA text volume by 35% and providing MOF staff with seamless 24-hour access. Lead developer in reworking over 50 client reports in the Collections subsystem, optimizing underlying SQL queries- resulting in approximately 20% faster report generation by ensuring proper table joins using clustered indexes.",
		skills: ['C#', 'SQL', '.NET', 'Azure', 'SSO', 'AGILE', 'MSTest', 'RESTful API', 'Database Maintenance', 'Data Conversion', 'Project Management']
	},
	{
		from: 'Apr',
		to: 'Sep 2020',
		title: 'Software Engineer Intern',
		company: 'Solutions Stores Inc.',
		details: "Contributed to a virtual health clinic app for family practice clinics across Ontario in an agile team. Led a significant internship project collaborating with UI/UX Designers and a Project Manager to organize Kanban boards, develop timelines, and gather client requirements. Successfully delivered the initial phase of the app, as a SPA React app, with SASS and Bootstrap for component styling and a Python Django + PostgreSQL container to securely serve endpoints as a REST API within one sprint, and data injection automation to the production general-user app API containers in the second sprint. This resulted in a secure registration portal for clinics, streamlining sign-up and verification. Designed backend infrastructure to enable clinic staff to manage virtual appointments and integrate with MDnius. Helped in migrating AWS EC2 instances, security rules & tasks to Fargate, reducing maintenance and monthly server costs by 15%.",
		skills: ['React', 'Django', 'AWS', 'Docker', 'Bootstrap', 'AGILE', 'Git', 'Jira & Bitbucket', 'Python', 'Javascript', 'HTML', 'Sass', 'Typescript', 'Cypress Unit Testing', 'Twilio', 'Serverless' ]
	},
	{
		from: 'Apr',
		to: 'Sep 2019',
		title: 'Software Developer Intern',
		company: 'Polymet Solutions Corp',
		details: "Over my internship, I contributed significantly to streamlining operations in both accounting and AutoCAD automation processes. In the accounting realm, I deployed and managed Docker containers for a REST API on Kuberenetes, and built with Django as well as SQL Server for the database, to generate quarterly balance reports efficiently. I implemented email automation, with smtplib to send reports to the accounting team, resulting in 30% time savings previously spent compiling Excel sheets. In the AutoCAD domain, my internship project was helping in building a SPA Angular web app. The app enabled engineers to upload CAD files and exported them to Google Drive using Google BigQuery. I also developed Google Cloud Functions to pass payload to DB-layer API and integrate with existing pyautocad plugin scripts. These scripts continuously analyze files and auto-generate frequent layers and arcs in new CAD files, which resulted in 15% design workflow timesaving.",
		skills: ['Angular', 'Django', 'Python', 'SQL Server', 'Google Cloud', 'Kubernetes', 'Docker & Docker Compose', 'pyautocad', 'AutoCAD', 'smtplib', 'Cloud Functions', 'CAD Automation', 'SMTP', 'Email Automation']
	},
	{
		from: 'Sep 2019',
		to: 'May 2021',
		title: 'Executive Web Developer',
		company: "Queen's Web Dev Team",
		details: "As Manager for a team of 4 students, I led the development of a React SPA website for a Kingston dental practice certification company by reviewing Git pull requests, delegating development issues, and leading meetings with our client to document their requirements. Simultaneously, I conducted weekly open-to-all seminars on current industry web development libraries and tools. My role involved providing technical guidance and facilitating discussions to enhance the team's skills and project outcomes, resulting in a successful website launch, with minimal maintenance required and a team confident in their web-dev skills!",
		skills: ['React', 'CSS', 'HTML', 'Git', 'Docker', 'Firebase', 'MongoDB', 'Database Design', 'Project Management']
	},
	{
		from: 'Sep 2020',
		to: 'May 2021',
		title: 'Undergraduate Teaching Assistant',
		company: "Queen's University",
		details: "Teaching Assistant for ELEC326 - Probability & Random Processes and ELEC374 - Digital Systems Engineering. In ELEC326, I led weekly tutorials and office hours, walking through sample problems and explaining concepts that students struggled with. In ELEC374, I worked as a resource in the weekly Lab course portion, where students would design a RISC processor in Verilog or VHDL over the semester. I assisted students in translating class theory to machine code for CPU operations.",
		skills: []
	}
]

const timelineDataSWE: TimeLineDtl[] = [
	{
		from: 'June 2021',
		to: 'Present',
		title: '.NET Software Developer',
		company: 'FAST Enterprises LLC',
		details: "Interim Dev Team Manager on the maintenance of the Portable Housing and Healthy Smiles Provincial Benefit Programs with client, the Ontario Ministry of Finance (MOF). Lead developer on enhancing Interac payments to MOL bank accounts, by integrating helper class that writes to CosmosDB (Postgres) + auto-calculates allocation, with REST API payment routes in ASP.NET/C#, unit tested in Selenium, and allocated $2M+. Reworked legacy React class-based components/hooks in Collection subsystem to functional components and custom hooks, verified with 20+ Jest Unit test scripts resulting in approximately 25% removal of re-used hooks in components and reducing bundle size. I streamlined user authentication by implementing Entra SSO in ASP.NET REST API auth routes on Azure and integrating with AKS Cluster, reducing automated 2FA text volume by 35% and providing MOF staff with seamless 24-hour access. Lead developer in reworking over 50 client reports in the Collections subsystem, optimizing PostgreSQL queries- resulting in approximately 20% faster report generation by ensuring proper table joins using clustered indexes.",
		skills: ['C#', 'ASP.NET', 'Azure', 'React', 'PostgreSQL', 'AKS', 'Jest', 'VB', 'SSO', 'AGILE', 'MSTest', 'Selenium', 'RESTful API', 'Database Maintenance', 'Project Management']
	},
	{
		from: 'Apr',
		to: 'Sep 2020',
		title: 'Software Engineer Intern',
		company: 'Solutions Stores Inc.',
		details: "Contributed to a start-up digital health clinic app for family practice clinics in Ontario as part of an agile team. Led a significant internship project collaborating with UI/UX Designers and a Project Manager to organize Kanban boards, develop timelines in JIRA, and gather client requirements. Successfully deployed a registration portal for clinics on AWS, using React, SASS, Bootstrap and a Django/Postgres REST API, and integrated with EKS cluster on AWS to securely pass data to user-app Docker containers, cache results in Redis store, and streamline sign-up flow. Developed routes on NodeJS/Express, Go/Gin as well as Java SpringBoot for other REST APIs across other products at Solutions' subsidiaries. Helped in migrating AWS EC2 instances, security rules & tasks to Fargate, reducing maintenance and monthly server costs by 15%.",
		skills: ['React', 'Django', 'Go', 'NodeJS', 'AWS', 'Kubernetes', 'EKS', 'Redis', 'Docker', 'Bootstrap', 'AGILE', 'Git', 'Jira & Bitbucket', 'Python', 'Javascript', 'HTML', 'SASS', 'Typescript', 'Cypress Unit Testing', 'Twilio', 'Serverless' ]
	}
]

const timelineDataQU: TimeLineDtl[] = [
	{
		from: 'Apr',
		to: 'Sep 2019',
		title: 'Software Developer Intern',
		company: 'Polymet Solutions Corp',
		details: "Over my internship, I contributed significantly to streamlining operations in both accounting and AutoCAD automation processes. In the accounting realm, I deployed Docker containers as AWS EC2 instances on Kubernetes cluster with EKS, and developed new API routes in a Python/Django REST API with SQL Server to generate and automate company balance reports for the accounting team, resulting in 30% time savings spent on Excel compilation. In the AutoCAD domain, my internship project was helping in building a SPA Angular web app and a Java/Spring Boot REST API with Maven. The app enables engineers to upload CAD files and exports them to GC BigQuery with a Data Transfer Service. I also wrote Google Cloud Functions to read from BigQuery and integrate with containerized pyautocad plugin scripting application to analyze files and auto-generate frequent layers and arcs in new CAD files, resulting in 15% design workflow timesaving.",
		skills: ['Angular', 'Django', 'Python', 'Java', 'Spring Boot', 'Maven', 'SQL Server', 'Google Cloud', 'Kubernetes', 'BigQuery', 'Docker', 'pyautocad', 'AutoCAD', 'smtplib', 'Cloud Functions', 'CAD Automation', 'SMTP', 'Email Automation']
	},
	{
		from: 'Sep 2019',
		to: 'May 2021',
		title: 'Executive Web Developer',
		company: "Queen's Web Dev Team",
		details: "As Manager for a team of 4 students, I led the development of a React SPA website for a Kingston dental practice certification company by reviewing Git pull requests, delegating development issues, and leading meetings with our client to document their requirements. Simultaneously, I conducted weekly open-to-all seminars on current industry web development libraries and tools. My role involved providing technical guidance and facilitating discussions to enhance the team's skills and project outcomes, resulting in a successful website launch, with minimal maintenance required and a team confident in their web-dev skills!",
		skills: ['React', 'CSS', 'HTML', 'Git', 'Docker', 'Firebase', 'MongoDB', 'Database Design', 'Project Management']
	},
	{
		from: 'Sep 2020',
		to: 'May 2021',
		title: 'Undergraduate Teaching Assistant',
		company: "Queen's University",
		details: "Teaching Assistant for ELEC326 - Probability & Random Processes and ELEC374 - Digital Systems Engineering. In ELEC326, I led weekly tutorials and office hours, walking through sample problems and explaining concepts that students struggled with. In ELEC374, I worked as a resource in the weekly Lab course portion, where students would design a RISC processor in Verilog or VHDL over the semester. I assisted students in translating class theory to machine code for CPU operations.",
		skills: []
	}
]

const aboutData: AboutDtl[] = [
	{
		heading: 'The Start',
		details: "Back in 2016, with all of my attention on Calculus, I decided to try my hand at creating a Graphing Calculator app—my first foray into coding and creating a large-scale app for the world to use. Eight years and a degree in Computer Engineering from Queen's University later, I’ve had the privilege of building software for businesses ranging from startups and small businesses to the Ministry of Finance, providing thousands of government staff across Ontario with automated software processes.",
	},
	{
		heading: 'Current Day',
		details: "As I've gained experience in the field, I’ve also refined my ability to lead projects with large-scale clientele: bridging the gap from business user to developer by asking questions to understand my client's requirements, while also documenting them in clear, technical terms on the developer end. I love writing code that hits the sweet spot where human needs and engineering meet—software that scales, is easy to follow along for other engineers, and provides the most utility to end users.",
	},
	{
		heading: 'Projects',
		details: "In my free time, you can find me building projects that provide utility to me and any others who share my interests of gaming, fashion, and long-form media content, while using these as learning experiences to tinker around with new libraries, methodologies, and broaden my arsenal of development skills."
	},
	// {
	// 	heading: 'Free Time',
	// 	details: "When I'm away from my beloved PC, I enjoy going on walks with my dog, widening my EDM sub-genre palette, hanging out with my loved ones, or experimenting with a new recipe to see if it'll find a way into my kitchen classics."
	// }
]

const skillsData: string[] = ['React', 'NextJS', 'NodeJS', 'ExpressJS', 'Fastify', 'Angular', 'Typescript', 'Python', 'Django', 'Flask', 'TensorFlow', 'Java', 'Spring', 'C#', '.NET', 'SQL', 'Postgres', 'MongoDB', 'HTML', 'CSS', 'Tailwind', 'Sass', 'Jest', 'Docker', 'Docker Compose', 'Nginx', 'AWS', 'Azure', 'Kubernetes', 'Ubuntu', 'Git Bash', 'Version Control', 'OAuth', 'HTTPS', 'RESTful APIs', 'CI/CD', 'Test Automation', 'AGILE', 'Object Oriented Programming', 'DS&A']

const projects: ProjectDtl[] = [
	{
		name: 'GamesAtlas',
		description: "GamesAtlas, with over 1500 monthly users, is the ultimate way to explore the vast world of any and all video games. Using the Metacritic API for game info, my NextJS web app can provide detailed information whether you're looking for artworks, screenshots, gameplay videos, user reviews and storefront/community links to inform you before you take the plunge! Apart from the aforementioned game details, GamesAtlas has an in-depth filter area where you can find games that fit your parameters of platform, overall rating, release date, genre, theme, game category, and game studio, all of which can be sorted by popularity, rating, name, or release date. Through the secure REST API which runs on a Dockerized ExpressJS & Typescript, PostgreSQL, and Nginx container, hosted on DigitalOcean, anyone is able to sign up securely with 2FA or through an OAuth provider such as Google, Discord, Spotify, Twitch, or Github. You can save games you've liked, and based on these, GamesAtlas provides recommendations on other titles. Users can also set game preferences, such as their platform, favourite game genre, theme, and type, which will provide personalized game recommendations on the Recommendations page.",
		images: ['GamesAtlas/GA1.JPG', 'GamesAtlas/GA2.JPG', 'GamesAtlas/GA3.JPG', 'GamesAtlas/GA4.JPG', 'GamesAtlas/GA5.JPG', 'GamesAtlas/GA6.JPG', 'GamesAtlas/GA7.JPG', 'GamesAtlas/GA8.JPG', 'GamesAtlas/GA9.JPG', 'GamesAtlas/GA10.JPG', 'GamesAtlas/GA11.JPG', 'GamesAtlas/GA12.JPG', 'GamesAtlas/GA13.JPG', 'GamesAtlas/GA14.JPG', 'GamesAtlas/GA15.JPG', 'GamesAtlas/GA16.JPG', 'GamesAtlas/GA17.JPG', 'GamesAtlas/GA19.JPG', 'GamesAtlas/GA20.JPG', 'GamesAtlas/GA21.JPG', 'GamesAtlas/GA22.JPG', 'GamesAtlas/GA23.JPG'],
		libraries: ['React', 'NextJSv13.0', 'Typescript', 'ExpressJS', 'PostgreSQL', 'Nginx', 'Docker', 'DigitalOcean', 'Material UI', 'CSS', 'NextAuth', 'OAuth2.0', 'Axios', 'SSR', '2FA', 'SMTP', 'HTTPS', 'REST API', 'Server/Client Components', '/pages directory', 'NextJS Middleware', 'Custom Hooks', 'Context Providers', 'Responsive Design'],
		link: 'https://at.games-atlas.xyz',
		frontend: 'https://github.com/allthetok/Gamesatlasfe',
		backend: 'https://github.com/allthetok/GamesAtlas'
	},
	{
		name: 'AT Kicks',
		description: "AT Kicks is a proof of concept ecommerce storefront that specializes in trendy footwear. The frontend was built with NextJS for speedy Server-side rendering, Typescript for data uniformity, Tailwind for quick and easy styling, and Stripe integration for a secure external checkout. While store inventory, secure endpoints, and user authentication are managed by the Dockerized Fastify & Typescript, PostgreSQL and Caddy container as a REST API, hosted on DigitalOcean. With data scraped from official retailers, ATKicks has detailed product information for 30+ different shoes and a large array of colorways. You can search for shoes, and if you're unsure of what to look for, the Products page provides a way to filter all shoes based on Brands, Model Types, and Shoe Editions, and sort based on name, release date, or price. Anybody can sign up with 2FA or through their favourite OAuth provider, with an in-depth account page to keep track of all orders. Meanwhile, Stripe keeps track of your cart items, with cart activity being displayed by Toast notifications, and provides a secure Checkout including custom branding and emailed invoices upon a successful payment.",
		images: ['ATKicks/AK1.JPG', 'ATKicks/AK2.JPG', 'ATKicks/AK3.JPG', 'ATKicks/AK4.JPG', 'ATKicks/AK5.JPG', 'ATKicks/AK6.JPG', 'ATKicks/AK7.JPG', 'ATKicks/AK8.JPG', 'ATKicks/AK9.JPG', 'ATKicks/AK10.JPG', 'ATKicks/AK11.JPG', 'ATKicks/AK12.JPG', 'ATKicks/AK13.JPG', 'ATKicks/AK14.JPG', 'ATKicks/AK16.JPG', 'ATKicks/AK17.JPG', 'ATKicks/AK18.JPG', 'ATKicks/AK19.JPG'],
		libraries: ['React', 'NextJSv14.0', 'Typescript', 'Fastify', 'PostgreSQL', 'Caddy (proxy)', 'Docker', 'Docker Compose', 'DigitalOcean', 'Material UI', 'CSS', 'TailwindCSS', 'Stripe', 'Toast', 'NextAuth', 'OAuth2.0', 'Axios', 'SSR', '2FA', 'SMTP', 'HTTPS', 'REST API', 'Server/Client Components', '/app directory', 'Custom Hooks', 'Context Providers', 'Responsive Design'],
		link: 'https://atkicks.allentok.com',
		frontend: 'https://github.com/allthetok/FrontEndEC',
		backend: 'https://github.com/allthetok/Ecommerce'
	},
	{
		name: 'PodFinder',
		description: "PodFinder is a podcast directory web app which leverages the PodChaser API for podcast data and is powered on the frontend by React, React Router, and MaterialUI for simple components, and bolstered by a secure ExpressJS + PostgreSQL (ElephantSQL) REST API. PodFinder provides detailed information for any podcast in the world, and the newest or most viewed episodes, which can be viewed and listened to directly on the app. Through the Explore page, you can find the most popular, newest, or trending podcasts and individual episodes in the world right now. Additionally, upon signing up and completing the 2FA process, you can add podcasts, or episodes to a personal list, found on your Likes page. Based on these, PodFinder also provides personalized recommendations for similar-themed podcasts and episodes.",
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
	'about/1.jpg', 'about/10.jpg', 'about/5.JPG', 'about/6.png', 'about/8.png'
]

export { timelineData, timelineDataSWE, timelineDataQU, aboutData, skillsData, projects, links, aboutImages }