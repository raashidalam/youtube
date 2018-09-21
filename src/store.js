import {createStore,combineReducers,applyMiddleware} from 'redux';
import {createLogger} from "redux-logger";
import thunkMiddleware from 'redux-thunk'
import Changereducer from './reducers/userreducer'
import Mathreducer from './reducers/mathreducer';
import YoutubeSearch from './reducers/youtubeSearch';
import  YoutubeReducer from './reducers/YoutubeReducer';
export default createStore(
    combineReducers({
        math:Mathreducer,user:Changereducer,youtube: YoutubeReducer,searchs:YoutubeSearch}),{}
        ,applyMiddleware(thunkMiddleware,createLogger())
    );

   