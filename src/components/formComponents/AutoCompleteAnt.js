import React, { useState} from 'react';
import { observer } from 'mobx-react-lite';
import { Form, AutoComplete } from 'antd';

const dataSource = [ 'Brasil', 'Russia', 'India', 'China' ]

export default observer(({formEl}) => {
    const [data, setData] = useState(dataSource)

    function handleSearch(value) {
        value && setData(dataSource.filter( data => data.includes(value)));
    }

    return (
        <Form.Item validateStatus={formEl.error ? 'error' : ''} help={formEl.error || ''}>
            {(
                <AutoComplete
                    dataSource={data}
                    placeholder={formEl.label}
                    {...formEl.bind()}
                    onSearch={handleSearch}
                />
            )}
        </Form.Item>
    )
})