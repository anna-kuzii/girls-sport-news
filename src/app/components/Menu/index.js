// import React, {Component} from 'react';
// import ButtonToolbar from "react-bootstrap/ButtonToolbar";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from 'react-bootstrap/Dropdown'
// import data from '../menu-item.json';
//
//
// export class DesktopMenu extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       showSubMenu: false,
//       idItem: []
//     }
//   }
//
//
//   toggleClick = (id) => {
//     console.log('id!!!! ', id);
//     this.setState((prevState) => ({
//       ...prevState,
//       showSubMenu: !prevState.showSubMenu,
//       idItem: [...prevState.idItem, id]
//     })
//     );
//   };
//
//   renderMenu = (items, showItems = true) => {
//     return (
//       <ul>
//         {showItems && items.map((item) =>
//           <li key={item.id} onClick={() => this.toggleClick(item.id)}>
//             <a href='#'>{item.title}</a>
//             {this.state.idItem.includes(item.id) && item.menu && this.renderMenu(item.menu, this.state.showSubMenu)}
//             {console.log('this.state.idItem!! ', this.state.idItem)}
//           </li>
//         )}
//       </ul>
//     )
//   };
//
//   render() {
//     return (
//       <div className="desktop-menu-container">
//         <div className="container">
//           {this.renderMenu(data.menu)}
//         </div>
//       </div>
//     )
//   }
// }

import React, {Component} from 'react';
import {MenuItem} from '../MenuItem/index.js';

export class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let menuItems = this.props.menuList;
    return (
      <div className='desktop-menu-container'>
        <div className="container">
          {menuItems.map((item) =>
            <MenuItem menu={item}/>
          )}
        </div>
      </div>
    );
  }
}

