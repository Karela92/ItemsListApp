import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateItemsList } from '../../../store/infoList/actions';

import Form from './Form/Form';

class FormContainer extends Component {

  render() {
    const { updateItemsList, itemsList } = this.props;
    return(
      <div>
        <Form
          updateItemsList = { updateItemsList }
          itemsList = { itemsList }
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentTabIndex: state.infoList.currentTabIndex,
    itemsList: state.infoList.itemsList
  }
};

const mapDispatchToProps = {
  updateItemsList
};


export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
