import React from 'react';
import { Link } from 'react-router-dom'
import { headerStateI } from '../../types';
import Button from './../button/Button';
import classes from './header.module.css';
import classesApp from '../app.module.css'

const Header: React.FC<headerStateI> = (props) => {


	return (
		<section className={classes.header}>
			<div className={classesApp.container + ' ' + classes.header__container}>
				<Link to={'/'} className={classes.logo}>
					<div className="logo__picture">{'<'}</div>
					<div className="logo__text">
						Andrey frontend dev
					</div>
				</Link>
				<div className={classes.buttons}>
					{props.headerButtonData.map((btn, i) => {
						return <Button key={i} theme={btn.theme} text={btn.text} />
					})}
				</div>
			</div>
		</section>
	);
};

export default Header;