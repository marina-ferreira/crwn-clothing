import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import rootReducer from './root.reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'redux/root.sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') middlewares.push(logger)

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store
