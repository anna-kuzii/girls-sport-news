import React, { Component } from 'react';
import { MenuItem } from './MenuItem/index';
import { IMenuDesktopState, IMenuDesktopProps, IMenuData } from '../menu.model';
import './style.scss';

export class MenuDesktop extends Component<IMenuDesktopProps, IMenuDesktopState> {
  constructor(props: IMenuDesktopProps) {
    super(props);

    this.state = {
      activeIndex: -1,
    };
  }

  public setActiveItem = (index: number): void => {
    this.setState((prevState: IMenuDesktopState) => ({
      ...prevState,
      activeIndex: prevState.activeIndex === index ? -1 : index,
    }));
  }

  public render(): JSX.Element {
    const { menuList } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className='desktopMenuContainer'>
        <ul className='listContainer'>
          {menuList.map((item: IMenuData, index: number): JSX.Element => (
            <MenuItem
              item={item}
              index={index}
              key={item.id}
              activeItem={activeIndex}
              setActiveItem={this.setActiveItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}
