import React from 'react';
import { observer } from 'mobx-react-lite';
import { Switch } from 'antd';

export default observer(({formEl}) => (
    <>
        <label>{formEl.label}</label><br/>
        <Switch
            placeholder={formEl.label}
            {...formEl.bind()}
            checked={formEl.value}
        />
    </>
))