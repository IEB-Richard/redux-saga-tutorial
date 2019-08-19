import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import { helloSaga, watchIncrementAsync } from './sagas'
import reducer from './reducer'

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger]

const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(helloSaga)
sagaMiddleware.run(watchIncrementAsync)

export default store