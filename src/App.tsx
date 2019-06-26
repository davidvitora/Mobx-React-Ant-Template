import React, { useContext, useState } from 'react';
import Root from './components'
import { observer, useObserver } from 'mobx-react-lite'
import UserStoreContext from './stores/UserStore'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default () => {
  const userStore = useContext(UserStoreContext)

  const [ collapsed, setCollapsed ] = useState(false)

  return useObserver(() => (
    <Layout style={{height:"100vh"}} >
      <Sider width={200} style={{ background: '#fff' }} collapsed={collapsed}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="2">
            <Icon type="dashboard" />
            <span>Dashboard</span>
          </Menu.Item>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="notification" />
                <span>Exemplos</span>
              </span>
            }
          >
            <Menu.Item key="9">Formulários</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => { setCollapsed(!collapsed) }}
            />
          </Menu>
        </Header>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Painel</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <input value={userStore.user.name} onChange={(e)=> { userStore.user.name = e.target.value }}></input>
            <input value={userStore.user.surname} onChange={(e)=> { userStore.user.surname = e.target.value }}></input>
            <Root/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  ))
}

