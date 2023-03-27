import { buttonDataType, sidebarBoxDataType } from './../types';



export const headerButtonData: buttonDataType = [
	{ theme: 'dark', text: 'Login', to: '/login', icon: 'arrowRight' },
	{ theme: 'purple', text: 'Links to us', to: '/', icon: 'BiExpand' },
	{ theme: 'dark', text: 'Telegram', to: '/', icon: 'FaTelegramPlane' },
]

export const stateSidebarBox: sidebarBoxDataType = [
	{ title: 'Some link', iconComp: 'arrowRight', },
	{ title: 'Link Danya', iconComp: 'arrowRight', },
	{ title: 'Link Shreak', iconComp: 'arrowRight', },
	{ title: 'Link mavis', iconComp: 'arrowRight', },
	{ title: 'Что-то', iconComp: 'arrowRight', },
]