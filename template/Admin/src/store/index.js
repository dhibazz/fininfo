import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./reducers"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


const store = createStore(rootReducer, composedEnhancer)

export default store


