import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TabsContent.scss';

import TabsCardContent from './TabsCardContent/TabsCardContent';
import TabsListContent from './TabsListContent/TabsListContent';

export default class TabsContent extends Component {

  static propTypes = {
    currentTabIndex: PropTypes.number,
    itemsList: PropTypes.array
  };

  render() {
    const { currentTabIndex, itemsList } = this.props;
    return(
      <div className='tabsContent'>
        { currentTabIndex === 0 ?
          <TabsListContent
            itemsList = { itemsList }
          /> :
          <TabsCardContent
            itemsList = { itemsList }
          />
        }
      </div>
    )
  }
}

