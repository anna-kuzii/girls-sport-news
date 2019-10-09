import React, { Component } from 'react';
import { MenuDesktop } from './MenuDesktop/index';
import { MenuMobile } from './MenuMobile/index';
import data from '../../assets/data/menu-items.json';
import Responsive from 'react-responsive';

export class Menu extends Component<{}> {
  public render(): JSX.Element {
    const Desktop = (props: any): JSX.Element => <Responsive {...props} minWidth={768} />;
    const Mobile = (props: any): JSX.Element => <Responsive {...props} maxWidth={767} />;

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
