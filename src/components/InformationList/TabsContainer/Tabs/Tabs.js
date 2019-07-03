import React, { Component } from 'react';
import { FaList, FaTh } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './Tabs.scss'

export default class Tabs extends Component {

  static propTypes = {
    currentTabIndex: PropTypes.number,
    getSelectedTabIndex: PropTypes.func
  };

  render() {
    const { currentTabIndex, getSelectedTabIndex } = this.props;
    return (
     <div className='tabsView'>
      <div className='tabsView__title'>
        Список объектов
      </div>
       <div className='tabsView__container'>
         <span className={ currentTabIndex === 0 ? 'isActiveTab' : '' }>
           <FaList
             onClick={() => getSelectedTabIndex(0)}
           />
         </span>
         <span className={ currentTabIndex === 1 ? 'isActiveTab' : '' }>
           <FaTh
             onClick={() => getSelectedTabIndex(1)}
           />
         </span>
       </div>
     </div>
    );
  }
}