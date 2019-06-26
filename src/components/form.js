import React from 'react';
import { observer } from 'mobx-react-lite'

import dvr from 'mobx-react-form/lib/validators/DVR';
import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';
import InputText from './formComponents/InputText.js'

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
}, {
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

const Form = observer(({ form }) => (
    <form>
        <InputText formEl={form.$('username')}/>
        <InputText formEl={form.$('email')}/>
        <InputText formEl={form.$('password')}/>
        <InputText formEl={form.$('passwordConfirm')}/>
        <button type="submit" onClick={form.onSubmit}>Submit</button>
        <button type="button" onClick={form.onClear}>Clear</button>
        <button type="button" onClick={form.onReset}>Reset</button>

        <p>{form.error}</p>
    </form>
))

export default () =>  <Form form={form} /> 