import React from 'react';
import { observer } from 'mobx-react-lite';
import { Form, Radio } from 'antd';


export default observer((props) => {
    const formEl = props.formEl

    const computedClassName = `${"light" in props ? "hp-input-light" : ""} ${props.className ? props.className : ''}`

    return (
        <div className={computedClassName}>
            <label>{formEl.label}</label>
            <Form.Item validateStatus={formEl.error ? 'error' : ''} help={formEl.error || ''}>
                {(
                    <Radio.Group onChange={formEl.onChange} value={formEl.value}>
                        {
                            props.options.map( option =>
                                <Radio key={option.value} value={option.value}>{option.display}</Radio>
                            )
                        }
                    </Radio.Group>
                )}
            </Form.Item>
        </div>
    )
})