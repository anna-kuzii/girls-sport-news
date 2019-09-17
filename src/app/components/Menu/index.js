import React, { Component } from 'react';
import { MenuDesktop } from './MenuDesktop';
import { MenuMobile } from './MenuMobile';
import data from '../../../assets/data/menu-items.json';
import Responsive from 'react-responsive';

export class Menu extends Component {
  render() {
    const Desktop = props => <Responsive {...props} minWidth={768} />;
    const Mobile = props => <Responsive {...props} maxWidth={767} />;

    return (
      <div>
        <Desktop>
          <MenuDesktop menuList={data.menu} />
        </Desktop>
        <Mobile>
          <MenuMobile title='Home' menuList={data.menu} />
        </Mobile>
      </div>
    );
  }
}
