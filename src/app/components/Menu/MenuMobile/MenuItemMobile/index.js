import React, { Component } from 'react';

export class MenuItemMobile extends Component {
  constructor(props) {
    super(props);
  }

  handleOpenMenu = () => {
    const { item: { title, menu }, setActiveItem } = this.props;

    if (menu) {
      setActiveItem(title, menu);
    }
  };

  render() {
    const { item: { title, menu } } = this.props,
      hasSubMenu = menu ? 'subMenu' : '';

    return (
      <li className={`listItem ${hasSubMenu}`}>
        <a
          href='#'
          onClick={menu && this.handleOpenMenu}
        >
          { title }
        </a>
      </li>
    );
  }
}
