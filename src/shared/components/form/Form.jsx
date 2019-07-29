import React from 'react';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';

export default observer(({ children, form }) => {


    return (
        <Form>
            { children.map( child => {
                return child.props.name
                ? 
                <Form.Item 
                    validateStatus={form.$(child.props.name).error ? 'error' : ''} 
                    help={form.$(child.props.name).error || ''}
                >
                    { React.cloneElement(child, { formEl: form.$(child.props.name) }) }
                </Form.Item>
                : child
            }) }
        </Form>
    )
})