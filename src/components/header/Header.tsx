import React from 'react';
import { Link } from 'react-router-dom'
import { headerStateI } from '../../types';
import Button from './../button/Button';
import classes from './header.module.scss';
import classesApp from '../app.module.scss'

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
						return (
							<Link to={btn.to} key={i}>
								<Button theme={btn.theme} text={btn.text} />
							</Link>
						)
					})}
				</div>
			</div>
		</section>
	);
};

export default Header;