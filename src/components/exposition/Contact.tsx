import React from 'react';
import classes from './exposition.module.scss';


import { BsPhoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md'
import { FaBirthdayCake } from 'react-icons/fa'

const Contact = () => {


	const clipboardClickHandler = (e: any) => {
		navigator.clipboard.writeText(e.target.dataset.clip)
		console.log(`Текст в буфере обмена: ${e.target.dataset.clip}`)
	}



	return (
		<div className={classes.contact}>

			<div className={classes.contact_item}
				onClick={clipboardClickHandler} data-clip='89086605214'
			>
				<div className={classes.contact_logo} ><BsPhoneFill /></div>
				<div className={classes.contact_info} data-clip='89086605214'>
					<div className={classes.contact_title}>Phone</div>
					<div className={classes.contact_text} data-clip='89086605214'>+7 908 660 52 14</div>
				</div>
			</div>

			<div className={classes.contact_item}
				onClick={clipboardClickHandler}
				data-clip='jared.bozh@gmail.com'
			>
				<div className={classes.contact_logo}><MdEmail /></div>
				<div className={classes.contact_info} data-clip='jared.bozh@gmail.com'>
					<div className={classes.contact_title}>Email</div>
					<div className={classes.contact_text} data-clip='jared.bozh@gmail.com'>jared.bozh@gmail.com</div>
				</div>
			</div>

			<div className={classes.contact_item}
				onClick={clipboardClickHandler}
				data-clip='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
			>
				<div className={classes.contact_logo}><FaBirthdayCake /></div>
				<div className={classes.contact_info} data-clip='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
					<div className={classes.contact_title}>Birthday</div>
					<div className={classes.contact_text}
						style={{ pointerEvents: 'none', userSelect: 'none' }}
					>
						01 Jan 2000, 23 y.o
					</div>
				</div>
			</div>

		</div>
	);
};

export default Contact;