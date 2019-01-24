import React, { Component } from 'react';
import Link from 'next/link'
import { Dropdown } from 'semantic-ui-react'

const logout =
  process.env.NODE_ENV === 'production'
    ? 'https://backpaca-yoga.herokuapp.com/api'
    : 'http://localhost:4000/api'

export default class NavigationDropdown extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Dropdown icon="large user">
        <Dropdown.Menu>
          <Link href="/">
            <Dropdown.Item text="Home" icon="home" />
          </Link>
          <Link href="/settings">
            <Dropdown.Item text="Settings" icon="setting" href="/settings" />
          </Link>
          <Dropdown.Item text="Logout" icon="sign out" href={`${logout}/logout`} />
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}