import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import statusReducer from './reducer'
import thunk from "redux-thunk";
 const reducer = combineReducers({
     status: statusReducer
 })
 const initialState = {}
 const store = createStore(
     reducer,
     initialState,
     composeWithDevTools(applyMiddleware(thunk))
     
 )

 export default store