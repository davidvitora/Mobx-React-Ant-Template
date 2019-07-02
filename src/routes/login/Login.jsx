import React, { useState } from 'react';
import { useObserver, observer } from 'mobx-react-lite'
import { Layout, Button, Form} from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import InputTextAnt from '../../components/formComponents/InputTextAnt'
import dvr from 'mobx-react-form/lib/validators/DVR';
import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';

const RegisterForm = () => {
  return useObserver(() => (
    <div style={{height:"100vh", width: '300px !important' }} >
        Formulário de cadastro
    </div>
  ))
}

const plugins = {
  dvr: dvr(validatorjs),
};


const fields = [{
  name: 'username',
  label: 'Username',
  placeholder: 'Please inform your username',
  rules: 'required|string|between:5,25',
},{
  name: 'password',
  label: 'Password',
  placeholder: 'Please inform your password',
  rules: 'required|string|between:5,25',
}];


const LoginForm = withRouter(observer((props) => {

  const hooks = {
    onSuccess(form) {
        alert('Form is valid! Send the request here.');
        // get field values
        console.log('Form Values!', form.values());
        props.history.push('/Panel')
    },
    onError(form) {
        alert('Form has errors!');
        // get all form errors
        console.log('All form errors', form.errors());
    }
  }

  const form = new MobxReactForm({ fields }, { plugins, hooks });
  
  return (
    <Layout 
      style={{
        height:"100vh", 
        width: 300, 
        margin: 'auto', 
        marginTop: '25%',
      }} 
    >
      <Form>
        <InputTextAnt formEl={form.$('username')}/>
        <InputTextAnt formEl={form.$('password')}/>
        <Button style={{marginRight: 10}} onClick={form.onSubmit}>Login</Button>
        <p>{form.error}</p>
      </Form>
    </Layout>
  )
}))


export default () => 
  <Layout style={{height:"100vh"}} >
    <Layout>
      <Route exact path="/" component={LoginForm}/>
      <Route path="/Register" component={RegisterForm}/>
    </Layout>
  </Layout>

