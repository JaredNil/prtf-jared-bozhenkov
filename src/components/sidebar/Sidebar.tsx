import React, { useRef } from 'react';
import classes from './sidebar.module.scss'

const Sidebar: React.FC = () => {
	const snapNodeRef = useRef<HTMLDivElement | any>()
	const snapClickHandler = () => {
		snapNodeRef.current.classList.toggle(classes._active)
	}


	return (
		<div className={classes.sidebar}>
			<div className={classes.sidebar__box}>
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
			<div className={classes.sidebar__snap}>
				<div className={classes.snap} ref={snapNodeRef} onClick={snapClickHandler}>
					<span className={classes.top}></span>
					<span className={classes.mid}></span>
					<span className={classes.low}></span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;