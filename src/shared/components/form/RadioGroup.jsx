import React from 'react';
import { observer } from 'mobx-react-lite';
import { Radio } from 'antd';


export default observer((props) => {
    const formEl = props.formEl

    const computedClassName = `${"light" in props ? "hp-input-light" : ""} ${props.className ? props.className : ''}`

    return (
        <div className={computedClassName}>
            <label style={{display: 'block', lineHeight: '10pt'}}>{formEl.label}</label>
            <Radio.Group onChange={formEl.onChange} value={formEl.value}>
                {
                    props.options.map( option =>
                        <Radio key={option.value} value={option.value}>{option.display}</Radio>
                    )
                }
            </Radio.Group>
        </div>
    )
})