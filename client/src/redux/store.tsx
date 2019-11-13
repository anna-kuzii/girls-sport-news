import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
