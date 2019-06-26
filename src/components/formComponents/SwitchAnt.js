import React from 'react';
import { observer } from 'mobx-react-lite';
import { Form, Switch } from 'antd';

export default observer(({formEl}) => (

    <Form.Item validateStatus={formEl.error ? 'error' : ''} help={formEl.error || ''}>
        {(
            <Switch
                placeholder={formEl.label}
                {...formEl.bind()}
                checked={formEl.value}
            />
        )}
    </Form.Item>
))