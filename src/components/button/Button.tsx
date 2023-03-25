import React, { useRef, useEffect } from 'react';
import { buttonData } from '../../types';

import classes from '../header/header.module.scss'

import { BiArrowFromLeft, BiExpand } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";

export const createIconComponent = (icon: string) => {

	if (icon === 'arrowRight') return < BiArrowFromLeft />
	if (icon === 'BiExpand') return < BiExpand />
	if (icon === 'FaTelegramPlane') return < FaTelegramPlane />

	return '->'
};


const Button: React.FC<buttonData> = (props) => {
	const buttonRef = useRef<HTMLDivElement | any>()
	let buttonRefClasses: any
	useEffect(() => {
		buttonRefClasses = buttonRef.current.children[0].classList
	}, [buttonRef])


	const mouseMoveHandler = () => {
		buttonRefClasses.add(classes.button__hover_mouseMove)
	}

	const mouseLeaveHandler = () => {
		buttonRefClasses.remove(classes.button__hover_mouseMove)
		buttonRefClasses.toggle(classes.button__hover_mouseStart)
		buttonRefClasses.toggle(classes.button__hover_mouseEnd)
	}

	return (
		<div className={classes.button} >
			<div ref={buttonRef}
				className={`${classes.button__container} ${classes[props.theme]}`}
				onMouseMove={mouseMoveHandler} onMouseLeave={mouseLeaveHandler}
			>
				<span className={classes.button__hover + ' ' + classes.button__hover_mouseStart} />
				<div className={classes.button__icon}>
					{createIconComponent(props.icon)}
				</div>
				<div className={classes.button__text}>{props.text}</div>
			</div>
		</div >
	);
};

export default Button;


