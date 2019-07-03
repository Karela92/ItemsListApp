import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Textarea.scss'

export default class Textarea extends Component {

  static propTypes = {
    handleChange: PropTypes.func,
    value: PropTypes.string,
    placeHolder: PropTypes.string
  };

  static defaultProps = {
    handleChange: () => {},
    value: '',
    placeHolder: ''
  };

  render() {
    const { handleChange, value, placeHolder, rows, cols } = this.props;
    return (
      <textarea
        rows={ rows }
        cols={ cols }
        onChange={ handleChange }
        value={ value }
        placeholder={ placeHolder }
        />
    );
  }
}