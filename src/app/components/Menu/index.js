import React from 'react';
import { MenuItem } from './MenuItem';

export const Menu = ({ menuList }) => (
  <div className='desktop-menu-container'>
    <div className='container'>
      {menuList.map((item) =>
        <MenuItem menu={item} key={item.id} />,
      )}
    </div>
  </div>
);
