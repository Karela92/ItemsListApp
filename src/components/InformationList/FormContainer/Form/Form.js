import React, { Component } from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import { Button, Input, Textarea, MultiInput } from '../../../ui/ui';

// import Button from '../../../ui/Button/Button';
// import Input from '../../../ui/Input/Input';
// import Textarea from '../../../ui/Textarea/Textarea';
// import MultiInput from '../../../ui/MultiInput/MultiInput';

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

  constructor() {
    super();
    this.state = {
      ...DEFAULT_STATE
    }
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const { itemsList, updateItemsList } = this.props;
    const { title, description, attributes } = this.state;
    if (title === '') {
      this.setState({
        error: true
      });
      return;
    }
    const removeEmptyValue = attributes.filter(attribute => attribute.length);
    const params = {
      title,
      description,
      attributes: removeEmptyValue
    };
    itemsList.push(params);
    updateItemsList(itemsList);
    this.setState({
      ...DEFAULT_STATE
    })
  }

  handleFieldChange(fieldName, ev) {
    this.setState({
      [fieldName]: ev.target.value
    });
  }

  handleMultiInputChange = (inputIndex, ev) => {
    this.setState({
      attributes: update(this.state.attributes, { [inputIndex]: { $set: ev.target.value } })
    });
  };

  addNewInput = () => {
    this.setState({
      attributes: update(this.state.attributes, { $push: [''] })
    });
  };

  removeSelectedInput = (index) => {
    this.setState({
      attributes: update(this.state.attributes, { $splice: [[index, 1]] })
    });
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

  render() {
    return (
      <div className='listForm'>
        { this.renderFormTitle() }
        { this.renderFormAttributes() }
        { this.renderDescription() }
        <div>
          <Button
            type='submit'
            content='Добавить'
            styleType='primary'
            handleChange= { (ev) => this.handleSubmit(ev) }
          />
        </div>
      </div>
    );
  }
}