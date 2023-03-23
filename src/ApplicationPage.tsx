import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { buttonDataType } from './types';
import SomeSection from './components/someSection/someSection';

const ApplicationPage: React.FC = (props) => {

	const headerButtonData: buttonDataType = [
		{ theme: 'dark', text: 'Login' },
		{ theme: 'dark', text: 'Links to us' },
		{ theme: 'dark', text: 'Telegram' },
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