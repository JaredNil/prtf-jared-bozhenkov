import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { buttonDataType, sidebarBoxDataType } from './types';
import SomeSection from './components/someSection/someSection';
import { BiArrowFromLeft } from 'react-icons/bi';

const ApplicationPage: React.FC = (props) => {

	const headerButtonData: buttonDataType = [
		{ theme: 'dark', text: 'Login', to: '/login', icon: 'arrowRight' },
		{ theme: 'purple', text: 'Links to us', to: '/', icon: 'BiExpand' },
		{ theme: 'dark', text: 'Telegram', to: '/', icon: 'FaTelegramPlane' },
	]

	const stateSidebarBox: sidebarBoxDataType = [
		{
			title: 'Some link', iconComp: 'arrowRight',
		},
		{
			title: 'Link Danya', iconComp: 'arrowRight',
		},
		{
			title: 'Link Shreak', iconComp: 'arrowRight',
		},
		{
			title: 'Link mavis', iconComp: 'arrowRight',
		},
		{
			title: 'Что-то', iconComp: 'arrowRight',
		},
	]

	return (
		<div className='application'>
			<Header headerButtonData={headerButtonData} />
			<SomeSection />
			<Sidebar stateSidebarBox={stateSidebarBox} />
		</div>
	);
};


export default ApplicationPage;