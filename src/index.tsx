import React from 'react';
import ReactDOM from 'react-dom';

//components
import App from './App';

// react-redux
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
