import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectedTabIndex } from '../../../store/infoList/actions';

import Tabs from './Tabs/Tabs';
import TabsContent from './TabsContent/TabsContent';

class TabsContainer extends Component {

  render() {
    const { currentTabIndex, itemsList, getSelectedTabIndex } = this.props;
    return(
      <div className='tabsContainer'>
        <Tabs
          currentTabIndex = { currentTabIndex }
          getSelectedTabIndex = { getSelectedTabIndex }
        />
        <TabsContent
          itemsList = { itemsList }
          currentTabIndex = { currentTabIndex }
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
  getSelectedTabIndex
};


export default connect(mapStateToProps, mapDispatchToProps)(TabsContainer);
