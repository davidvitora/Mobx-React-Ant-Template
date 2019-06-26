import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite'
import UserStore from '../stores/UserStore'

const comp1 = observer(() => {
  const userStore = useContext(UserStore)
  return (
    <div>{ userStore.user.name }</div>
  );
})

export default comp1;
