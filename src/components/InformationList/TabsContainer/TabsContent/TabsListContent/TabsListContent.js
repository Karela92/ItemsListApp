import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TabsListContent.scss'

export default class TabsListContent extends Component {

  static propTypes = {
    itemsList: PropTypes.array
  };

  render() {
    const { itemsList } = this.props;
    return (
      <div>
        { itemsList.map((item, index) => {
         return(
           <div key={ index } className='listContentBlock'>
             <div className='listContentBlock__header'>
               <div className='titleBlock'>
               <span>
                 { index + 1 }
               </span>
                 { item.title }
               </div>
               <div className='attributesBlock'>
                 { item.attributes.map((attribute, attributeIndex) => {
                   return(
                     <span key={ attributeIndex }>
                   { attribute }
                 </span>
                   )
                 }) }
               </div>
             </div>
             <div className='listContentBlock__description'>
               { item.description }
               <span> </span>
             </div>
           </div>
         )
        }) }
      </div>
    );
  }
}