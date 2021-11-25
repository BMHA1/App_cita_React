import { createStore } from 'redux'
import mainReducer from './Reducers/mainReducer'
import {devToolsEnhancer} from 'redux-devtools-extension'

export default createStore(mainReducer,{}, devToolsEnhancer({trace:true}))
