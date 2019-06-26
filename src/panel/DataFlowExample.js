import React, {useContext} from 'react';
import { Layout, Breadcrumb, Input, Button, Form } from 'antd';
import { observer } from 'mobx-react-lite';
import UserStore from '../stores/UserStore';


//Os três componentes abaixos são observadores
//recebem o contexto do UserStore e conseguem acessar os seus valores
const Comp1 = observer(() => {
    const userStore = useContext(UserStore)
    return (
        <div>Nome: { userStore.user.name }</div>
    );
})

const Comp2 = observer(() =>{
    const userStore = useContext(UserStore)
    return (
        <>
        <div>Sobrenome: { userStore.user.surname }</div>
        <p>Contagem de letras do nome: { userStore.countChar }</p>
        <Button onClick={() => { userStore.clear() }}>Limpar</Button>
        </>
    );
})

const Inputs = observer(() =>{
    const userStore = useContext(UserStore)
    return (
        <>
        <Form.Item>
            <Input
                value={userStore.user.name}
                placeholder="Digite o nome da pessoa" 
                onChange={(e) => { userStore.user.name = e.target.value }}
            />
        </Form.Item>
        <Form.Item>
            <Input
                value={userStore.user.surname}
                placeholder="Digite o sobrenome da pessoa" 
                onChange={(e) => { userStore.user.surname = e.target.value }}
            />
        </Form.Item>
        </>
    );
})

export default () => (
    <>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Painel</Breadcrumb.Item>
            <Breadcrumb.Item>Exemplos</Breadcrumb.Item>
            <Breadcrumb.Item>Fluxo de dados</Breadcrumb.Item>
        </Breadcrumb>
        <Layout.Content
            style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
            }}
        >
            <h4>Demonstração das funcionalidades do Mobx</h4>
            <Form>
                <Inputs/>
                <Comp1/>
                <Comp2/>
            </Form>
        </Layout.Content>
    </>
)