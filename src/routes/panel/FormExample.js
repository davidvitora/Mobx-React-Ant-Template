import React from 'react';
import { observer } from 'mobx-react-lite'
import { Layout, Breadcrumb, Button, Form } from 'antd';
import dvr from 'mobx-react-form/lib/validators/DVR';
import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';
import InputTextAnt from '../../components/formComponents/InputTextAnt'
import SwitchAnt from '../../components/formComponents/SwitchAnt.js'
import DatePicker from '../../components/formComponents/DatePicker.js'
import AutoComplete from '../../components/formComponents/AutoCompleteAnt.js'

const plugins = {
    dvr: dvr(validatorjs),
};

const fields = [{
    name: 'username',
    label: 'Username',
    placeholder: 'Insert User',
    rules: 'required|string|between:5,25',
},{
    name: 'email',
    label: 'Email',
    placeholder: 'Insert Email',
    rules: 'required|email|string|between:5,25',
},{
    name: 'dataNascimento',
    label: 'Data de nascimento',
    placeholder: 'Data de nascimento',
    rules: 'required|date',
},{
    name: 'pais',
    label: 'Pais de origem',
    placeholder: 'Informe seu pais de origem',
    rules: 'required|string|between:5,25',
},{
    name: 'possuiCarro',
    label: 'Pais de origem',
    placeholder: 'Indique se possui carro',
    rules: 'required|boolean',
},{
    name: 'password',
    label: 'Password',
    placeholder: 'Insert Password',
    rules: 'required|string|between:5,25',
}, {
    name: 'passwordConfirm',
    label: 'Password Confirmation',
    placeholder: 'Confirm Password',
    rules: 'required|string|same:password',
}];

const hooks = {
    onSuccess(form) {
        alert('Form is valid! Send the request here.');
        // get field values
        console.log('Form Values!', form.values());
    },
    onError(form) {
        alert('Form has errors!');
        // get all form errors
        console.log('All form errors', form.errors());
    }
}

const form = new MobxReactForm({ fields }, { plugins, hooks });

const FormExample = observer(({ form }) => (
    <Form>
        <InputTextAnt formEl={form.$('username')}/>
        <InputTextAnt formEl={form.$('email')}/>
        <DatePicker formEl={form.$('dataNascimento')}/>
        <AutoComplete formEl={form.$('pais')}/>
        <SwitchAnt formEl={form.$('possuiCarro')} />
        <InputTextAnt formEl={form.$('password')}/>
        <InputTextAnt formEl={form.$('passwordConfirm')}/>
        <Button style={{marginRight: 10}} onClick={form.onSubmit}>Submit</Button>
        <Button style={{marginRight: 10}} onClick={form.onClear}>Clear</Button>
        <Button onClick={form.onReset}>Reset</Button>
        <p>{form.error}</p>
    </Form>
))

export default () => (
    <>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Painel</Breadcrumb.Item>
            <Breadcrumb.Item>Exemplos</Breadcrumb.Item>
            <Breadcrumb.Item>Formulários</Breadcrumb.Item>
        </Breadcrumb>
        <Layout.Content
            style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
            }}
        > 
            <h4>Demonstração de formulário utilizando Mobx-React-Form</h4>
            <FormExample form={form} />
        </Layout.Content>
    </>
)