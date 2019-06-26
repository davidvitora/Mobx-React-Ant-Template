import React from 'react';
import { observer } from 'mobx-react-lite';
import { Form, DatePicker } from 'antd';

export default observer(({formEl, stringDate}) => {

    //Caso o campo possuir a regra de ser uma string, será retornado o texto da data
    function onChange(moment) {
        if(formEl.rules.includes('string')) {
            formEl.onChange(moment.format())
        } else {
            formEl.onChange(moment)
        }
    }

    return (
        <Form.Item validateStatus={formEl.error ? 'error' : ''} help={formEl.error || ''}>
            {(
                <DatePicker
                    placeholder={formEl.placeholder}
                    onChange={onChange}
                />
            )}
        </Form.Item>
    )
})