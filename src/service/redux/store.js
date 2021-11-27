import { createStore } from 'redux'
import mainReducer from './Reducers/mainReducer'
import {devToolsEnhanºcer} from 'redux-devtools-extension'

export default createStore(mainReducer,{}, devToolsEnhanºcer({trace:true}))
