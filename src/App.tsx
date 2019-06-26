import React, { useContext } from 'react';
import Root from './components'
import { observer, useObserver } from 'mobx-react-lite'
import UserStoreContext from './stores/UserStore'

export default () => {
  const userStore = useContext(UserStoreContext)

  return useObserver(() => (
    <div className="App">
      <header className="App-header">
        <input value={userStore.user.name} onChange={(e)=> { userStore.user.name = e.target.value }}></input>
        <input value={userStore.user.surname} onChange={(e)=> { userStore.user.surname = e.target.value }}></input>
        <Root/>
      </header>
    </div>
  ))
}

