import React from 'react';
import classes from './sidebar.module.css'

const Sidebar: React.FC = () => {
	return (
		<div className={classes.sidebar}>
			<div className="sidebar__box">
				<div className="box__intro">
					<div className="box__intro-title">	Chapter 01	</div>
					<div className="box__intro-text">	Basics	</div>
				</div>
				<div>ссылка</div>
				<div>ссылка</div>
				<div>ссылка</div>
				<div>ссылка</div>
				<div>ссылка</div>
				<div>ссылка</div>
			</div>
			<div className="sidebar__snap">
				<div className="snap__locked">
					<span className='top'></span>
					<span className='mid'></span>
					<span className='low'></span>
				</div>
				<div className="snap__open">
					<span className='arrow'>{'<-'}</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;