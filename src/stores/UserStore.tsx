import { observable, computed, action } from 'mobx'
import { createContext } from 'react'

class UserStore {
    @observable user = { name: '', surname: '' }
    @action
    clear() {
        this.user.name = ''
        this.user.surname = ''
    }
    @computed
    get countChar() {
        return this.user.name.length + this.user.surname.length;
    }
}

export default createContext( new UserStore() )
