import React, { useState} from 'react';
import { observer } from 'mobx-react-lite';
import { AutoComplete } from 'antd';

const dataSource = [ 'Brasil', 'Russia', 'India', 'China' ]

export default observer(({formEl, placeholder}) => {
    const [data, setData] = useState(dataSource)

    function handleSearch(value) {
        value && setData(dataSource.filter( data => data.includes(value)));
    }

    return (
        <AutoComplete
            dataSource={data}
            placeholder={(formEl && formEl.label) || placeholder}
            {...formEl.bind()}
            onSearch={handleSearch}
        />
    )
})