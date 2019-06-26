import React from 'react';
import { observer } from 'mobx-react-lite';

export default observer(({formEl}) => (
    <>
        <label htmlFor={formEl.id}>
            {formEl.label}
        </label>
        <input {...formEl.bind()} />
        <p>{formEl.error}</p>
    </>
))