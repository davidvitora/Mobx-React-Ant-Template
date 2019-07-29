import React from 'react';
import { observer } from 'mobx-react-lite';
import { Form, Input } from 'antd';

export default observer((props) => {
    const computedClassName = `${"light" in props ? "hp-input-light" : ""} ${props.className ? props.className : ''}`

    let componentProps = { ...props }
    delete componentProps.formEl
    delete componentProps.light


    return (
        <Form.Item validateStatus={props.formEl.error ? 'error' : ''} help={props.formEl.error || ''}>
            {(
                <Input
                    placeholder={props.formEl.label}
                    {...props.formEl.bind()}
                    {...componentProps}
                    className={computedClassName}
                />
            )}
        </Form.Item>
    )
})
