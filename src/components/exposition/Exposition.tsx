import React from 'react';
import Contact from './Contact';

import classes from './exposition.module.scss';
import classesApp from './../app.module.scss'

import { BsTelegram } from 'react-icons/bs';

import { FaGithub } from 'react-icons/fa'
import { ImDownload } from 'react-icons/im'
import { Link } from 'react-router-dom';




const Exposition: React.FC = () => {



	return (
		<section className={classes.exposition}>
			<div className={classes.exposition__container + ' ' + classesApp.container}>

				<div className={classes.portrait_container}>
					<div className={classes.portrait}>
						<div className={classes.portrait__photo}>
							<div className={classes.portrait__photo_img}
							//  srcSet='/'
							/>
						</div>
						<div className={classes.portrait__FIO}>Jared Bozh</div>
						<div className={classes.portrait__profession}>React.ts developer</div>
						<div className={classes.portrait__icons}>
							<Link to={'https://t.me/drag11'} className={classes.portrait__icon}><BsTelegram size={'20px'} /></Link>
							<Link to={'https://t.me/drag11'} className={classes.portrait__icon}><BsTelegram size={'20px'} /></Link>
							<Link to={'https://t.me/drag11'} className={classes.portrait__icon}><BsTelegram size={'20px'} /></Link>
							<Link
								to={'https://github.com/JaredNil'}
								className={classes.portrait__icon}>
								<FaGithub size={'20px'} />
							</Link>
						</div>
						<Contact />
						<div className={classes.download} onClick={() => { alert('Скачать резюме') }}>
							<ImDownload />
							<span>Download resume</span>
						</div>
					</div>
				</div>


				<div className={classes.dossier_container}>
					<div className={classes.dossier}>

						<div className={classes.dossier__upline}>
							<div className={classes.dossier__upline_text}>My dossier</div>
							<span></span>
						</div>

						<div className={classes.dossier__explain}>
							<p>Welcome to my portfolio! I am a React developer with extensive experience in building dynamic and responsive web applications. Over the years, I have worked on a wide range of projects, from small-scale prototypes to large-scale enterprise applications.</p>
							<p>One of my key strengths is my ability to design and implement clean, maintainable code that is easy to scale and adapt. I am passionate about staying up-to-date with the latest industry trends and best practices, and I am always looking for ways to improve my skills and expand my knowledge.</p>
							<p>In my portfolio, you will find a selection of my most recent and successful projects. Each project showcases my skills and expertise in using React to create innovative and user-friendly applications. From e-commerce websites to social media platforms, I have experience working on a variety of projects in different industries.</p>
							<p>I am particularly proud of my ability to work well in a team environment, and I have experience collaborating with designers, project managers, and other developers to ensure that projects are completed on time and to the highest quality standards.</p>
							<p>If you are looking for a React developer who is dedicated to delivering exceptional results and has a passion for creating engaging user experiences, please don't hesitate to get in touch. I would love to hear about your project and discuss how I can help bring your vision to life.</p>
						</div>
						<div className={classes.dossier__skills}>
							<p>TypeScript dev with Testing</p>
							<p>PWA SPA Application</p>
							<p>Writing microservices Golang</p>
							<p>K8s docker container</p>
							<p>Basic knowledge C++</p>
						</div>
						<div className={classes.dossier__tech_container}>
							<div className={classes.dossier__tech}>

								<div className={classes.dossier__tech}>React.js</div>
								<div className={classes.dossier__tech}>Redux</div>
								<div className={classes.dossier__tech}>Axios</div>
								<div className={classes.dossier__tech}>React Router</div>
								<div className={classes.dossier__tech}>Firebase</div>
								<div className={classes.dossier__tech}>Stripe</div>
								<div className={classes.dossier__tech}>GraphQL</div>
								<div className={classes.dossier__tech}>Twilio</div>
								<div className={classes.dossier__tech}>Material-UI</div>
								<div className={classes.dossier__tech}>React Native</div>
								<div className={classes.dossier__tech}>Chart.js</div>
								<div className={classes.dossier__tech}>D3.js</div>
								<div className={classes.dossier__tech}>Formik</div>
								<div className={classes.dossier__tech}>Yup</div>
								<div className={classes.dossier__tech}>Jest</div>
								<div className={classes.dossier__tech}>Enzyme</div>
								<div className={classes.dossier__tech}>Socket.io</div>
								<div className={classes.dossier__tech}>OAuth</div>
								<div className={classes.dossier__tech}>Google Maps API</div>
								<div className={classes.dossier__tech}>YouTube Data API</div>
								<div className={classes.dossier__tech}>AWS Amplify</div>
								<div className={classes.dossier__tech}>Auth0</div>
								<div className={classes.dossier__tech}>Netlify</div>
								<div className={classes.dossier__tech}>Contentful</div>
								<div className={classes.dossier__tech}>Algolia</div>
								<div className={classes.dossier__tech}>Cloudinary</div>
								<div className={classes.dossier__tech}>Sentry</div>

							</div>
						</div>
					</div>
				</div>

			</div>
		</section>
	);
};

export default Exposition;