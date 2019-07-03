import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Input from '../Input/Input';

import './MultiInput.scss'

export default class MultiInput extends Component {

  static propTypes = {
    attributes: PropTypes.array,
    handleMultiInputChange: PropTypes.func,
    addNewInput: PropTypes.func,
    removeSelectedInput: PropTypes.func
  };

  render() {
    const { attributes, handleMultiInputChange, addNewInput, removeSelectedInput } = this.props;
    return(
      <div>
        { attributes.map((attribute, index) => {
          return (
            <div key={ index } className='multiInput'>
              <Input
                placeHolder={ `Введите название ${index + 1} пункта` }
                value={ attribute }
                handleChange={ (ev) => handleMultiInputChange(index, ev) }
              />
              <Button
                styleType='additional'
                content='+'
                handleChange={ () => addNewInput() }
              />
              {
                attributes.length > 1 ?
                  <Button
                    styleType='cancel'
                    content='-'
                    handleChange={ () => removeSelectedInput(index) }
                  /> : ''
              }
            </div>
          )
        }) }
      </div>
    )
  }
}