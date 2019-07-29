import React from 'react';
import { observer } from 'mobx-react-lite';
import { DatePicker } from 'antd';

export default observer((props) => {

    const formEl = props.formEl
    let componentProps = { ...props }
    delete componentProps.formEl

    //Caso o campo possuir a regra de ser uma string, será retornado o texto da data
    function onChange(moment) {
        if(formEl.rules.includes('string')) {
            formEl.onChange(moment.format())
        } else {
            formEl.onChange(moment)
        }
    }

    const computedClassName = `${"light" in props ? "hp-input-light" : ""} ${props.className ? props.className : ''}`

    return (
        <DatePicker
            placeholder={formEl.placeholder}
            onChange={onChange}
            {...componentProps}
            className={computedClassName}
        />
)
})