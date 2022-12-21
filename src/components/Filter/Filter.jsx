import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export class Filter extends Component {
  static propTypes = {
    setFilter: PropTypes.func.isRequired,
  };
  state = {
    value: '',
  };

  handleInputChange = ({ target }) => {
    this.setState({ value: target.value });
    this.props.setFilter(target.value.toLowerCase());
  };

  render() {
    return (
      <input
        className={css.styledImput}
        placeholder="Find by name"
        value={this.state.value}
        onChange={this.handleInputChange}
      />
    );
  }
}

export default Filter;
