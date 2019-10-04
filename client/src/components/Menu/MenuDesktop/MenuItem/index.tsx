import React, { Component } from 'react';
import { MenuDesktop } from '../index';
import { IMenuItemProps } from '../../menu.model';
import '../style.scss';

export class MenuItem extends Component<IMenuItemProps> {

  public handleOpenMenu = (): void => {
    const { index, setActiveItem, item } = this.props;
    if (item.menu) {
      setActiveItem(index);
    }
  }

  public render(): JSX.Element {
    const { index, activeItem } = this.props;
    const { item: { title, menu } } = this.props;
    const isActive = index === activeItem;
    const activeClass = isActive ? 'activeItem': '';

    return (
      <li className='listItem'>
        <a
          href='#'
          onClick={this.handleOpenMenu}
          className={activeClass}
        >
          {title}
        </a>
        {isActive && menu && <MenuDesktop menuList={menu} />}
      </li>
    );
  }
}
