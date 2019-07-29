import React from 'react';
import { observer } from 'mobx-react-lite'
import { Layout, Breadcrumb, Button, Form } from 'antd';
import { AutoComplete, DatePicker, InputText, Switch, RadioGroup } from 'Components/form'
import createForm from 'Util/createForm'

const form = createForm({ 
    fields: [
        {
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
            name: 'birthdate',
            label: 'Birth Date',
            placeholder: 'Inform the Birth Date',
            rules: 'required|date',
        },{
            name: 'country',
            label: 'Country',
            placeholder: 'Inform the country',
            rules: 'required|string|between:5,25',
        },{
            name: 'hasCar',
            label: 'Have a Car?',
            placeholder: 'Inform if has a car',
            rules: 'required|boolean',
        },{
            name: 'gender',
            label: 'Gender',
            placeholder: 'Please choose your gender',
            rules: 'required|string|in:m,s',
        },{
            name: 'password',
            label: 'Password',
            placeholder: 'Insert Password',
            rules: 'required|string|between:5,25',
        },{
            name: 'passwordConfirm',
            label: 'Password Confirmation',
            placeholder: 'Confirm Password',
            rules: 'required|string|same:password',
        }
    ]
}, 
{   
    hooks: {
        onError(form) {
            alert('The form is not valid, check the errors in the console');
            console.log('All form errors', form.errors());
        }
    }
});

const FormExample = observer(({ form }) => (
    <Form>
        <InputText formEl={form.$('username')}/>
        <InputText formEl={form.$('email')}/>
        <DatePicker formEl={form.$('birthdate')}/>
        <AutoComplete formEl={form.$('country')}/>
        <Switch formEl={form.$('hasCar')} />
        <RadioGroup 
            options={[
                {value: 'm', display: 'Male'} , 
                {value:'f', display: 'Female'}
            ]} 
            formEl={form.$('gender')}
        />
        <InputText formEl={form.$('password')}/>
        <InputText formEl={form.$('passwordConfirm')}/>
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
            <Breadcrumb.Item>Example</Breadcrumb.Item>
            <Breadcrumb.Item>Simple Form</Breadcrumb.Item>
        </Breadcrumb>
        <Layout.Content
            style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
            }}
        > 
            <h4>Mobx-React-Form Example</h4>
            <FormExample form={form} />
        </Layout.Content>
    </>
)