import React, { Component } from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import { Button, Input, Textarea, MultiInput } from '../../../ui/ui';

import './Form.scss';

const DEFAULT_STATE = {
  title: '',
  attributes: [''],
  description: '',
  error: false
};

export default class FormContainer extends Component {

  static propTypes = {
    itemsList: PropTypes.array,
    updateItemsList: PropTypes.func
  };

  state = {
    ...DEFAULT_STATE
  };

  handleSubmit(ev) {
    ev.preventDefault();
    const { itemsList, updateItemsList } = this.props;
    const { title, description, attributes } = this.state;
    if (title === '') {
      this.setState(() => ({
        error: true
      }));
      return;
    }
    const removeEmptyValue = attributes.filter(attribute => attribute.length);
    const params = {
      title,
      description,
      attributes: removeEmptyValue
    };
    updateItemsList([...itemsList, params]);
    this.setState(() => ({
      ...DEFAULT_STATE
    }))
  }

  handleFieldChange(fieldName, ev) {
    ev.persist();
    this.setState(() => ({
      [fieldName]: ev.target.value
    }));
  }

  handleMultiInputChange = (inputIndex, ev) => {
    ev.persist();
    this.setState(state => ({
      attributes: update(state.attributes, { [inputIndex]: { $set: ev.target.value } })
    }));
  };

  addNewInput = () => {
    this.setState(state => ({
      attributes: update(state.attributes, { $push: [''] })
    }));
  };

  removeSelectedInput = (index) => {
    this.setState(state => ({
      attributes: update(state.attributes, { $splice: [[index, 1]] })
    }));
  };

  renderErrorMessage() {
    return (
      <div className='errorMessage'>
        Поле не может быть пустым
      </div>
    )
  }

  renderFormTitle() {
    const { error, title } = this.state;
    return(
      <div>
        <h4>Добавить новый объект</h4>
        <p>Заголовок *</p>
        <Input
          value={ title }
          placeHolder='Введите заголовок'
          handleChange={ (ev) => this.handleFieldChange('title', ev) }
        />
        { error ? this.renderErrorMessage() : '' }
      </div>
    )
  }

  renderFormAttributes() {
    const { attributes } = this.state;
    return(
      <div>
        <p>Добавить пункт</p>
        <MultiInput
          attributes={ attributes }
          removeSelectedInput={ this.removeSelectedInput }
          addNewInput={ this.addNewInput }
          handleMultiInputChange={ this.handleMultiInputChange }
        />
      </div>
    )
  }

  renderDescription() {
    const { description } = this.state;
    return(
      <div>
        <p>Описание</p>
        <Textarea
          value={ description }
          placeHolder='Описание'
          handleChange={ (ev) => this.handleFieldChange('description', ev) }
          rows={ 8 }
          cols={ 67 }
        />
      </div>
    )
  }

  renderSubmitButton() {
    return(
      <div>
        <Button
          type='submit'
          content='Добавить'
          styleType='primary'
          handleChange= { (ev) => this.handleSubmit(ev) }
        />
      </div>
    )
  }

  render() {
    return (
      <div className='listForm'>
        { this.renderFormTitle() }
        { this.renderFormAttributes() }
        { this.renderDescription() }
        { this.renderSubmitButton() }
      </div>
    );
  }
}