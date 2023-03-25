import React, { useRef } from 'react';

import classes from './sidebar.module.scss'

import ButtonSidebar from './buttonSidebar/ButtonSidebar';

const Sidebar: React.FC = () => {
	const snapNodeRef = useRef<HTMLDivElement | any>()
	const sidebarNodeRef = useRef<HTMLDivElement | any>()

	const snapClickHandler = () => {
		snapNodeRef.current.classList.toggle(classes._active)
		sidebarNodeRef.current.classList.toggle(classes._hide)
	}



	return (
		<div className={classes.sidebar + ' ' + classes._hide} ref={sidebarNodeRef}>
			<div className={classes.sidebar__box}>

				<div className={classes.sidebar__intro}>
					<div className={classes.box__intro_title}>Portfolio</div>
					<div className={classes.box__intro_text}>	Проекты	</div>
				</div>
				<div className={classes.box__links}>

					<ButtonSidebar />
				</div>

			</div>
			<div className={classes.sidebar__snap}>
				<div className={classes.snap} ref={snapNodeRef}
					onClick={snapClickHandler}
				>
					<span className={classes.top}></span>
					<span className={classes.mid}></span>
					<span className={classes.low}></span>
					<span className={classes.angleTop}></span>
					<span className={classes.angleDow}></span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;