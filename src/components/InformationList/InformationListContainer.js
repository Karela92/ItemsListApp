import React, { Component } from 'react';

import ActionButtonsContainer from './ActionButtonsContainer/ActionButtonsContainer';
import TabsContainer from './TabsContainer/TabsContainer';
import FormContainer from './FormContainer/FormContainer';

export default class InformationListContainer extends Component {

  render() {
    return(
      <div className='informationList'>
        <ActionButtonsContainer />
        <TabsContainer />
        <FormContainer />
      </div>
    )
  }
}