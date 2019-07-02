import React from 'react';
import { Layout, Breadcrumb } from 'antd';

export default () => (
    <>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Painel</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <Layout.Content
            style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
            }}
        > 
            <h4>Conteudo da dashboard</h4>
        </Layout.Content>
    </>
)