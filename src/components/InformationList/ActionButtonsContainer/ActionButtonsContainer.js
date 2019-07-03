import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateItemsList } from '../../../store/infoList/actions';

import ActionButtons from './ActionButtons/ActionButtons';

class ActionButtonsContainer extends Component {

  render() {
    const { itemsList, updateItemsList } = this.props;
    return(
      <div>
        <ActionButtons
          itemsList = { itemsList }
          updateItemsList = { updateItemsList }
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    itemsList: state.infoList.itemsList
  }
};

const mapDispatchToProps = {
  updateItemsList
};


export default connect(mapStateToProps, mapDispatchToProps)(ActionButtonsContainer);
