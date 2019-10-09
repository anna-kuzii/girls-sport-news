import React, { Component } from 'react';
import { MenuItemMobile } from './MenuItemMobile/index';
import { IMenuMobileProps, IMenuMobileState, IMenuData } from '../menu.model';
import './style.scss';

export class MenuMobile extends Component<IMenuMobileProps, IMenuMobileState> {
  constructor(props: IMenuMobileProps) {
    super(props);

    const { title, menuList } = this.props;

    this.state = {
      activeItemTitle: title,
      activeItemSubMenu: menuList,
      numberOfStep: 0,
      arrayOfStates: [],
      menuIsOpen: true,
    };
  }

  public setActiveItem = (title: string, submenu: IMenuData[]): void => {
    this.setState((prevState: IMenuMobileState) => ({
      ...prevState,
      arrayOfStates: [ ...prevState.arrayOfStates, {
        title: prevState.activeItemTitle,
        submenu: prevState.activeItemSubMenu,
      } ],
      numberOfStep: prevState.numberOfStep + 1,
      activeItemTitle: title,
      activeItemSubMenu: submenu,
    }));
  }

  public handleCloseMenu = (): void => {
    this.setState((prevState: IMenuMobileState) => ({
      ...prevState,
      menuIsOpen: !prevState.menuIsOpen,
    }));
  }

  public handleBackToPreviousMenu = (): void => {
    const { numberOfStep } = this.state;
    const index = numberOfStep - 1;

    if (!numberOfStep) {
      return;
    }

    this.setState((prevState: IMenuMobileState) => ({
      ...prevState,
      activeItemTitle: prevState.arrayOfStates[index].title,
      activeItemSubMenu: prevState.arrayOfStates[index].submenu,
      arrayOfStates: prevState.arrayOfStates.slice(0, index),
      numberOfStep: prevState.numberOfStep - 1,
    }));
  }

  public renderMenu = (title: string, submenu: IMenuData[]): JSX.Element => {
    const { numberOfStep, menuIsOpen } = this.state;
    const firstList = numberOfStep ? '' : 'mainList';
    const stateOfMenu = menuIsOpen ? 'openedMenu' : '';

    return (
      <div className={`mobileMenu ${stateOfMenu}`}>
        <div className='closeButton' onClick={this.handleCloseMenu} />
        {numberOfStep ? <div className='backButton' onClick={this.handleBackToPreviousMenu}>Back button</div> : ''}
        <div className={`menuWrapper ${firstList}`}>
          <div className='title'>{title}</div>
          <ul>
            {submenu.map((item: IMenuData): JSX.Element => (
              <MenuItemMobile
                key={item.id}
                item={item}
                setActiveItem={this.setActiveItem}
              />
            ))
            }
          </ul>
        </div>
      </div>
    );
  }

  public render(): JSX.Element {
    const { activeItemTitle, activeItemSubMenu } = this.state;

    return (
      this.renderMenu(activeItemTitle, activeItemSubMenu)
    );
  }
}
