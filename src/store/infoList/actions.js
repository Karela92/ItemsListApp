export const  SET_CURRENT_TAB_INDEX = 'SET_CURRENT_TAB_INDEX',
              UPDATE_ITEMS_LIST = 'UPDATE_ITEMS_LIST';

export const getSelectedTabIndex = index => {
  return {
    type: SET_CURRENT_TAB_INDEX,
    payload: index,
  }
};

export const updateItemsList = list => {
  return {
    type: UPDATE_ITEMS_LIST,
    payload: list,
  }
};

