/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducers, sagas } from '../modules';

const reduxDevTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
	const middlewares = [];

	if (process.env.NODE_ENV !== `production`) {
		const { logger } = require(`redux-logger`);

		middlewares.push(logger);
	}
	middlewares.push(sagaMiddleware);
	const enhancer = compose(applyMiddleware(...middlewares), reduxDevTools);
	const store = createStore(reducers, enhancer);

	if (process.env.NODE_ENV !== `production`) {
		if (module.hot) {
			module.hot.accept('../modules/reducers', () => {
				store.replaceReducer(reducers);
			});
		}
	}
	return store;
};

const store = configureStore();
sagaMiddleware.run(sagas);
export default store;
