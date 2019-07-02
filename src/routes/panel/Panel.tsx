import React, { useState } from 'react';
import { useObserver } from 'mobx-react-lite'
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormExample from './FormExample.js'
import DataFlowExample from './DataFlowExample.js'
import Dashboard from './Dashboard.js'

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

export default () => {
  const [ collapsed, setCollapsed ] = useState(false)

  return useObserver(() => (
    <Layout style={{height:"100vh"}} >
        <Sider width={200} style={{ background: '#fff' }} collapsed={collapsed}>
          <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="2">
              <Link to="/Panel/">
                <Icon type="dashboard" />
                <span>Dashboard</span>
              </Link>
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
              <Menu.Item key="9">
                <Link to="/Panel/FormExample">
                  Formulários
                </Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to="/Panel/DataFlowExample">
                  Fluxo de dados
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header">
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
            <Switch>
              <Route exact path="/Panel/" component={Dashboard}/>
              <Route path="/Panel/FormExample" component={FormExample}/>
              <Route path="/Panel/DataFlowExample" component={DataFlowExample}/>
            </Switch>
          </Layout>
        </Layout>
    </Layout>
  ))
}

