import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import ApplicationPage from './ApplicationPage';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ApplicationPage />
		</BrowserRouter>
	</React.StrictMode>
);

