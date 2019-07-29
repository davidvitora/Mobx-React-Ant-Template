import React from 'react';
import { observer } from 'mobx-react-lite';
import { Switch } from 'antd';

export default observer(({formEl}) => (
    <>
        <label style={{display: 'block', lineHeight: '10pt'}}>{formEl.label}</label>
        <Switch
            placeholder={formEl.label}
            {...formEl.bind()}
            checked={formEl.value}
        />
    </>
))