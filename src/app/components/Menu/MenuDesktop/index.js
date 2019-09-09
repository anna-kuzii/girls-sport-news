import React, { Component } from 'react';
import { Menu } from './Menu';
import './style.scss';

export class MenuDesktop extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  handleClickOutside = (event) => {
    const { menuList } = this.props;
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.renderMenuDesktop(menuList);
    }
  };

  renderMenuDesktop = (menuList) => {
    return (
      <div ref={this.setWrapperRef}>
        <Menu menuList={menuList} opened={false} />
      </div>
    );
  };

  render() {
    const { menuList } = this.props;
    return this.renderMenuDesktop(menuList);
  }
}

