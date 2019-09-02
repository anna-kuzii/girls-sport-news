import React from 'react'
import { MenuItem } from './MenuItem'

export const Menu = (props) =>
  <div className='desktop-menu-container'>
    <div className="container">
      {props.menuList.map((item) =>
        <MenuItem menu={item} key={item.id} />
      )}
    </div>
  </div>
