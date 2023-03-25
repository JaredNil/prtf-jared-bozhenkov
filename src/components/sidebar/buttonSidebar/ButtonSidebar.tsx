import React, { useEffect, useRef } from 'react';


import { Link } from 'react-router-dom';

import { BsFillCloudsFill } from "react-icons/bs";
import classes from '../sidebar.module.scss'
import { createIconComponent } from './../../button/Button';


const ButtonSidebar = (props: any) => {


	const linkNodeRef = useRef<any>()

	let linkNodeRefHover: any
	useEffect(() => {

		linkNodeRefHover = linkNodeRef.current.children[0].style
	}, [linkNodeRef])


	const mouseEnterHandler = () => {
		linkNodeRefHover.width = '100%'
	}

	const mouseLeaveHandler = () => {
		setTimeout(() => {
			linkNodeRefHover.width = '0%'
		}, 0);
	}




	return (
		<Link to={'/'} ref={linkNodeRef} className={classes.box__link}
			onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
		>
			<span className={classes._hover + ' ' + classes._hover_mouseStart} />
			<div className={classes.box__link_text}>
				{props.title}
			</div>
			<div className={classes.box__link_logo}>
				{createIconComponent(props.iconComp)}
			</div>
		</Link>
	);
};

export default ButtonSidebar;



