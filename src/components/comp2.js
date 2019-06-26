import React, {useContext} from 'react';
import { observer } from 'mobx-react-lite'
import UserStore from '../stores/UserStore'

const comp2 = observer(() =>{
  console.log('again')
  const userStore = useContext(UserStore)
  return (
    <>
      <div>{ userStore.user.surname }</div>
      <p>{ userStore.countChar }</p>
      <button onClick={() => { userStore.clear() }}>Reset</button>
    </>
  );
})

export default comp2;