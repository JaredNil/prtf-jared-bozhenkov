import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { buttonDataType } from './types';
import SomeSection from './components/someSection/someSection';
import { BiArrowFromLeft } from 'react-icons/bi';

const ApplicationPage: React.FC = (props) => {

	const headerButtonData: buttonDataType = [
		{ theme: 'dark', text: 'Login', to: '/login', icon: 'arrowRight' },
		{ theme: 'purple', text: 'Links to us', to: '/', icon: 'BiExpand' },
		{ theme: 'dark', text: 'Telegram', to: '/', icon: 'FaTelegramPlane' },
	]

	return (
		<div className='application'>
			<Header headerButtonData={headerButtonData} />
			<SomeSection />
			<Sidebar />
		</div>
	);
};


export default ApplicationPage;