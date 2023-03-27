import React from 'react';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Exposition from './components/exposition/Exposition';

import { headerButtonData, stateSidebarBox } from './contentData/dataApplication';


const Application: React.FC = (props) => {

	return (
		<div className='application'>
			<Header headerButtonData={headerButtonData} />
			<Sidebar stateSidebarBox={stateSidebarBox} />

			<Exposition />
		</div>
	);
};


export default Application;