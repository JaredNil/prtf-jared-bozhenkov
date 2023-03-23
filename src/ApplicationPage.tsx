import React from 'react';
import Header from './components/header/Header';
import { buttonDataType } from './types';

const ApplicationPage: React.FC = (props) => {

	const headerButtonData: buttonDataType = [
		{ theme: 'dark', text: 'Login' },
		{ theme: 'dark', text: 'Links to us' },
		{ theme: 'dark', text: 'Telegram' },
	]

	return (
		<div className='application'>
			<Header headerButtonData={headerButtonData} />
			hi
		</div>
	);
};


export default ApplicationPage;