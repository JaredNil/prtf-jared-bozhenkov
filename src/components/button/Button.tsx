import React from 'react';
import { buttonData } from '../../types';

import classes from '../header/header.module.css'


const Button: React.FC<buttonData> = (props) => {
	return (
		<div className={classes.button}>
			<div className={`${classes.button__container} ${classes[props.theme]}`}>
				<div className="button__icon">ic</div>
				<div className="text">{props.text}</div>
			</div>
		</div>
	);
};

export default Button;