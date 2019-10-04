import React, { Component } from 'react';
import { IMenuItemMobileProps } from '../../menu.model';

export class MenuItemMobile extends Component<IMenuItemMobileProps> {

  public handleOpenMenu = (): void => {
    const { item: { title, menu }, setActiveItem } = this.props;

    if (menu) {
      setActiveItem(title, menu);
    }
  }

  public render(): JSX.Element {
    const { item: { title, menu } } = this.props;
    const hasSubMenu = menu ? 'subMenu' : '';

    return (
      <li className={`listItem ${hasSubMenu}`}>
        <a
          href='#'
          onClick={menu && this.handleOpenMenu}
        >
          {title}
        </a>
      </li>
    );
  }
}
