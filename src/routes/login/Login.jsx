import React from 'react';
import { observer } from 'mobx-react-lite'
import { Layout, Button, Form} from 'antd';
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { InputText, DatePicker } from 'Components/form'
import createForm from 'Util/createForm'
import style from './Login.module.less';


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
        props.history.push('/Panel')
    }
  }

  const formRegister = createForm({ fields }, { hooks });
  
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
        <InputText formEl={formRegister.$('username')}/>
        <InputText formEl={formRegister.$('email')}/>
        <DatePicker formEl={formRegister.$('birthdate')}/>
        <InputText formEl={formRegister.$('password')}/>
        <InputText formEl={formRegister.$('passwordConfirm')}/>
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
        props.fakeAuth.authenticate(() => {

        })
        props.history.push('/panel')
    }
  }

  const form = createForm({ fields }, { hooks });
  
  return (
    <div
      className={style.loginContainer}
    >
      <Form>
        <InputText formEl={form.$('username')}/>
        <InputText formEl={form.$('password')}/>
        <Button style={{marginRight: 10}} onClick={form.onSubmit}>Login</Button>
        <p>{form.error}</p>
      </Form>
      <Link to="/register">
        I don't have an account!
      </Link>
    </div>
  )
}))


export default (props) => {
  return (
    <Layout style={{height:"100vh"}} >
      <Layout>
        <Route exact path={["/", "/login"]} render={ () => <LoginForm fakeAuth={props.fakeAuth} /> }/>
        <Route path="/register" component={RegisterForm}/>
      </Layout>
    </Layout>
  )
}

