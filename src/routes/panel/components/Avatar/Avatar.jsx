import React from 'react'
import { Menu, Icon, Dropdown } from 'antd';
import { Link } from 'react-router-dom'
import style from './Avatar.module.less'

console.log(style)

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
<Dropdown overlay={menu}>
  <span className={style.avatar}> Usuário <Icon type="down" /> </span>
</Dropdown>