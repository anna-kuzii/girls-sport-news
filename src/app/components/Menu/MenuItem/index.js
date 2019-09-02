import React, { Component } from 'react'
import { Menu } from '../../Menu'

export class MenuItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      opened: false,
    }
  }

  openMenu = () => {
    this.setState((prevState) => ({
        ...prevState,
        opened: !prevState.opened,
      }),
    )
  }

  render() {
    const { title, menu } = this.props.menu

    return (
      <div className='listItem' onClick={this.openMenu}>
        {title}
        {this.state.opened && <Menu menuList={menu}/>}
      </div>
    )

  }
}
