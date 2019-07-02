import React from 'react';
import { observer } from 'mobx-react-lite'
import { Layout, Button, Form} from 'antd';
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import InputTextAnt from '../../components/formComponents/InputTextAnt'
import DatePicker from '../../components/formComponents/DatePicker.js'
import dvr from 'mobx-react-form/lib/validators/DVR';
import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';
import style from './Login.module.less';

const plugins = {
  dvr: dvr(validatorjs),
};

const RegisterForm = withRouter(observer((props) => {

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
    name: 'birthdate',
    label: 'Birth Date',
    placeholder: 'Inform your Birth Date',
    rules: 'required|date',
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
        props.history.push('/Panel')
    },
    onError(form) {
        alert('Form has errors!');
        // get all form errors
        console.log('All form errors', form.errors());
    }
  }

  const formRegister = new MobxReactForm({ fields }, { plugins, hooks });
  
  return (
    <div
      style={{
        height: 'fit-content !important', 
        width: 300, 
        margin: 'auto', 
        marginTop: '50px',
        backgroundColor: '#FFFFFF',
        padding: '40px',
      }} 
    >
      <h2 style={{textAlign: 'center'}}>Register Form</h2>
      <small>Insert and send the informations bellow to create your new account.</small>
      <Form style={{marginTop: 20}}>
        <InputTextAnt formEl={formRegister.$('username')}/>
        <InputTextAnt formEl={formRegister.$('email')}/>
        <DatePicker formEl={formRegister.$('birthdate')}/>
        <InputTextAnt formEl={formRegister.$('password')}/>
        <InputTextAnt formEl={formRegister.$('passwordConfirm')}/>
        <Button style={{marginRight: 10}} onClick={formRegister.onSubmit}>Send</Button>
        <p>{formRegister.error}</p>
      </Form>
      <Link to="/">
        I already have an account!
      </Link>
    </div>
  )
}))

const LoginForm = withRouter(observer((props) => {

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
    <div
      className={style.loginContainer}
    >
      <Form>
        <InputTextAnt formEl={form.$('username')}/>
        <InputTextAnt formEl={form.$('password')}/>
        <Button style={{marginRight: 10}} onClick={form.onSubmit}>Login</Button>
        <p>{form.error}</p>
      </Form>
      <Link to="/register">
        I don't have an account!
      </Link>
    </div>
  )
}))


export default () => 
  <Layout style={{height:"100vh"}} >
    <Layout>
      <Route exact path="/" component={LoginForm}/>
      <Route path="/Register" component={RegisterForm}/>
    </Layout>
  </Layout>

