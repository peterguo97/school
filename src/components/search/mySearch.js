import React from 'react';
import common from '../css/detail.css';
import { SearchBar, WhiteSpace, WingBlank } from 'antd-mobile';

class Search extends React.Component {
  state = {
    value: ''
  }
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render() {
    return (
      <div className={common.wrapper}>
        <SearchBar value={this.state.value}
        onChange = {this.onChange}
        placeholder="Search" maxLength={20} />
      </div>
    );
  }
}

export default Search;

