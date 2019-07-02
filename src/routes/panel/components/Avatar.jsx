import React from 'react'
import { Menu, Icon, Dropdown, Button } from 'antd';
import { Link } from 'react-router-dom'

const menu = (
  <Menu>
    <Menu.Item onClick={()=>{ localStorage.setItem('isAuthenticated', false) }} key="exit">
      <Link to='/'>
        <Icon type="logout"/>
        <span>Logout</span>
      </Link>
    </Menu.Item>
  </Menu>
)


export default () =>
<Dropdown style={{height: '100%'}} overlay={menu}>
  <span>Usuário <Icon type="down" /></span>
</Dropdown>