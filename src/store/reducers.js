import { combineReducers } from 'redux';
import infoListReducer from './infoList/reducers'

export default combineReducers({
  infoList: infoListReducer
})