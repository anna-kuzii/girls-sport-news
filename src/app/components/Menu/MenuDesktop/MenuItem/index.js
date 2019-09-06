import React, { Component } from 'react';
import { Menu } from '../../Menu';
import '../style.scss';

export class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  handleOpenMenu = () => {
    const { index, setActiveItem, item } = this.props;
    if (item.menu) {
      setActiveItem(index);
    }
  };

  render() {
    const { index, activeItem } = this.props,
      { item: { title, menu } } = this.props,
      isActive = index === activeItem,
      activeClass = isActive ? 'activeItem': '';

    return (
      <li className='listItem'>
        <a
          href='#'
          onClick={this.handleOpenMenu}
          className={activeClass}
        >
          {title}
        </a>
        { isActive && <Menu menuList={menu} /> }
      </li>
    );
  }
}
