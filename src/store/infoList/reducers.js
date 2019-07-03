import {
  SET_CURRENT_TAB_INDEX,
  UPDATE_ITEMS_LIST
} from './actions';
import itemsList from '../../../src/data.json'

const initialState = {
  currentTabIndex: 0,
  itemsList: itemsList.data
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_TAB_INDEX:
      return {
        ...state, currentTabIndex: action.payload
      };
    case UPDATE_ITEMS_LIST:
      return {
        ...state, itemsList: [ ...action.payload ]
      };

    default:
      return state;
  }
}