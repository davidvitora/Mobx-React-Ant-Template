import { observable, computed, action, decorate } from 'mobx'
import { createContext } from 'react'

class UserStore {
    user = { name: '', surname: '' }
    clear() {
        this.user.name = ''
        this.user.surname = ''
    }
    get countChar() {
        return this.user.name.length + this.user.surname.length;
    }

}

export default createContext( new (decorate( UserStore, {
    user: observable,
    clear: action,
    countChar: computed,
}))() );
