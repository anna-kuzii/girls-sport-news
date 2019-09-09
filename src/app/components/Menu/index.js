import React, { Component } from 'react';
import { MenuDesktop } from './MenuDesktop';
import { MenuMobile } from './MenuMobile';
import data from '../../../assets/data/menu-items.json';

export class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  render() {
    const { windowWidth } = this.state,
      isMobile = windowWidth < 767;

    return (
      <div>
        { isMobile ? <MenuMobile title='Home' menuList={data.menu} /> : <MenuDesktop menuList={data.menu} /> }
      </div>
    );
  }
}
