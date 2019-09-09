import React, { Component } from 'react';
import { MenuItem } from '../MenuItem';
import '../style.scss';

export class Menu extends Component {
  constructor(props) {
    super(props);

    const { opened } = this.props;

    this.state = {
      activeIndex: -1,
      opened: opened,
    };
  }

  componentDidMount() {
    const body = document.querySelector('body'),
      { opened } = this.state;
    if (opened) {
      body.style.overflow = 'visible';
      body.style.background = 'red';
      return;
    }

    body.style.overflow = 'hidden';
    body.style.background = 'white';
  }

  setActiveItem = (index) => {
    this.setState((prevState) => ({
      ...prevState,
      activeIndex: prevState.activeIndex === index ? -1 : index,
    }));
  };

  render() {
    const { menuList } = this.props,
      { activeIndex } = this.state;

    return (
      <div className='desktopMenuContainer'>
        <ul className='listContainer'>
          {menuList.map((item, index) => (
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
