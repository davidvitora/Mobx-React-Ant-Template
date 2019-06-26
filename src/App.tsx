import React, { useContext } from 'react';
import Root from './components'
import { observer } from 'mobx-react-lite'
import UserStoreContext from './stores/UserStore'

function App() {
  const userStore = useContext(UserStoreContext)

  return (
    <div className="App">
      <header className="App-header">
        <input value={userStore.user.name} onChange={(e)=> { userStore.user.name = e.target.value }}></input>
        <input value={userStore.user.surname} onChange={(e)=> { userStore.user.surname = e.target.value }}></input>
        <Root/>
      </header>
    </div>
  );
}

export default observer(App);
