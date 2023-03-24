import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { buttonDataType } from './types';
import SomeSection from './components/someSection/someSection';

const ApplicationPage: React.FC = (props) => {

	const headerButtonData: buttonDataType = [
		{ theme: 'dark', text: 'Login', to: '/login' },
		{ theme: 'purple', text: 'Links to us', to: '/' },
		{ theme: 'dark', text: 'Telegram', to: '/' },
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