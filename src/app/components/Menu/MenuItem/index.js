import React, { Component } from 'react'
import { Menu } from '../../Menu'

export class MenuItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      opened: false,
    }
  }

  handleOpenMenu = () => {
    this.setState((prevState) => ({
      ...prevState,
      opened: !prevState.opened,
    }),
    )
  }

  render() {
    const { menu: { title, menu } } = this.props
    const { opened } = this.state

    return (
      <div className='listItem' onClick={this.handleOpenMenu}>
        {title}
        {opened && <Menu menuList={menu} />}
      </div>
    )
  }
}
