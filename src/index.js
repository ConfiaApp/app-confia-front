/* eslint-disable react/no-render-return-value */
/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { history } from './services';
import store from './store';
import theme from './theme';
import App from './App';

const render = (Component) => {
	return ReactDOM.render(
		<Provider store={store}>
			<Router history={history}>
				<ThemeProvider theme={theme}>
					<Component />
				</ThemeProvider>
			</Router>
		</Provider>,
		document.getElementById('root')
	);
};

render(App);

if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default;
		render(NextApp);
	});
}
