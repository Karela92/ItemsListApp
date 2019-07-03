import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TabsCardContent.scss'

export default class TabsCardContent extends Component {

  static propTypes = {
    itemsList: PropTypes.array
  };

  render() {
    const { itemsList } = this.props;
    return (
      <div className='cardContent'>
        { itemsList.map((item, index) => {
          return(
            <div key={ index } className='cardContentBlock'>
              <div className='cardContentBlock__header'>
                <div className='titleBlock'>
                  { item.title }
                  <span>
                    { index + 1 }
                  </span>
                </div>
              </div>
              <div className='cardContentBlock__attributes'>
                { item.attributes.map((attribute, attributeIndex) => {
                  return(
                    <span key={ attributeIndex }>
                   { attribute }
                 </span>
                  )
                }) }
              </div>
              <div className='cardContentBlock__description'>
                { item.description }
              </div>
            </div>
          )
        }) }
      </div>
    );
  }
}