import { createStore } from 'redux'
import mainReducer from './Reducers/mainReducer'
import {devToolsEnhancer} from 'redux-devtools-extension'
import persistStore from 'redux-persist/es/persistStore'

export const store = createStore(mainReducer,{} , devToolsEnhancer({trace:true}))
export const persistor= persistStore(store);

export default  {store, persistor }
