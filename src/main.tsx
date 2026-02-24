import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import type { CVData } from './interfaces';

const cvData: CVData = {
	photo: 'https://www.w3schools.com/howto/img_avatar.png',
	name: 'John',
	lastName: 'Doe',
	position: 'Software Engineer',
	experience: [
		{ year: 2020, description: 'Worked at Company A' },
		{ year: 2021, description: 'Worked at Company B' },
	],
	education: [
		'Bachelor of Science in Computer Science',
		'Master of Science in Software Engineering',
	],
};

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<main
			className='cv-main w-full max-w-4xl mx-auto my-0 p-4
    grid grid-cols-1 md:grid-cols-3 gap-4'
		>
			<header className='cv-header text-center'>
				<h1>
					CV {cvData.name} {cvData.lastName}
				</h1>
			</header>
			<aside className='cv-personal p-20 bg-gray-100 rounded-lg text-center'>
				<h2 className='text-center'>Personal Data</h2>
				<img src={cvData.photo} alt='Profile Photo' />
				<p>
					{cvData.name} {cvData.lastName}
				</p>
				<small>{cvData.position}</small>
			</aside>
			<section className='cv-details'>
				<h2>Experience</h2>
				<ul>
					{cvData.experience.map((exp, index) => (
						<li key={index}>
							<strong>{exp.year}:</strong> {exp.description}
						</li>
					))}
				</ul>
				<h2>Education</h2>
				<ul>
					{cvData.education.map((edu, index) => (
						<li key={index}>{edu}</li>
					))}
				</ul>
			</section>
		</main>
	</StrictMode>,
);
