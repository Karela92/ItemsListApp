import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  REMOVE_LAST_LIST_ITEM, REMOVE_FIRST_LIST_ITEM, REPLACE_LAST_ITEM_TO_START, REPLACE_FIRST_ITEM_TO_END
} from '../../../../constants/ItemsList/ActionButtons';
import { Button } from '../../../ui/ui';

import './ActionButtons.scss';

export default class ActionButtons extends Component {

  static propTypes = {
    updateItemsList: PropTypes.func,
    itemsList: PropTypes.array
  };

  handleUpdateListItem(removeType) {
    const { itemsList, updateItemsList } = this.props;
    const updatedItemList = _.clone(itemsList);
    switch (removeType) {
      case REPLACE_LAST_ITEM_TO_START:
        updatedItemList.unshift(_.last(itemsList));
        break;
      case REPLACE_FIRST_ITEM_TO_END:
        updatedItemList.push(_.first(itemsList));
        break;
      case REMOVE_FIRST_LIST_ITEM:
        updatedItemList.shift();
        break;
      case REMOVE_LAST_LIST_ITEM:
        updatedItemList.pop();
        break;
    }
    updateItemsList(updatedItemList);
  }

  render() {
    const { itemsList } = this.props;
    const disabled = itemsList.length <= 1 ? true : false;
    return (
      <div className='buttonGroup'>
        <div className='buttonGroup__actions'>
          <Button
            content='Скопировать в начало'
            styleType='primary'
            handleChange = { () => this.handleUpdateListItem(REPLACE_LAST_ITEM_TO_START) }
          />
          <Button
            content='Скопировать в конец'
            styleType='primary'
            handleChange = { () => this.handleUpdateListItem(REPLACE_FIRST_ITEM_TO_END) }
          />
        </div>
        <div className='buttonGroup__actions'>
          <Button
            content='Удалить первый'
            styleType='primary'
            handleChange = { () => this.handleUpdateListItem(REMOVE_FIRST_LIST_ITEM) }
            disabled={ disabled }
          />
          <Button
            content='Удалить последний'
            styleType='primary'
            handleChange = { () => this.handleUpdateListItem(REMOVE_LAST_LIST_ITEM) }
            disabled={ disabled }
          />
        </div>
      </div>
    );
  }
}