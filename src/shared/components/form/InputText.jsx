import React from 'react';
import { observer } from 'mobx-react-lite';
import { Input } from 'antd';

export default observer((props) => {
    const computedClassName = `${"light" in props ? "hp-input-light" : ""} ${props.className ? props.className : ''}`

    let componentProps = { ...props }
    delete componentProps.formEl
    delete componentProps.light


    return (
        <Input
            placeholder={props.formEl.label}
            {...props.formEl.bind()}
            {...componentProps}
            className={computedClassName}
        />
)
})
