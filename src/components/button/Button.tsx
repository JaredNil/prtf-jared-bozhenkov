import React, { useRef } from 'react';
import { buttonData } from '../../types';

import classes from '../header/header.module.scss'


const Button: React.FC<buttonData> = (props) => {
	const buttonRef = useRef<HTMLDivElement | any>('s')

	const mouseUpHandler = () => {
		buttonRef.current.children[0].classList.add(classes.button__hover_mouseMove)
	}

	const mouseDownHandler = () => {
		buttonRef.current.children[0].classList.remove(classes.button__hover_mouseMove)
		buttonRef.current.children[0].classList.toggle(classes.button__hover_mouseStart)
		buttonRef.current.children[0].classList.toggle(classes.button__hover_mouseEnd)
	}

	return (
		<div className={classes.button} >
			<div ref={buttonRef}
				className={`${classes.button__container} ${classes[props.theme]}`}
				onMouseMove={mouseUpHandler} onMouseLeave={mouseDownHandler}
			>
				<span className={classes.button__hover + ' ' + classes.button__hover_mouseStart}></span>
				<div className={classes.button__icon}>ic</div>
				<div className={classes.button__text}>{props.text}</div>
			</div>
		</div >
	);
};

export default Button;