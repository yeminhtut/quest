import { combineReducers } from 'redux'
import { questReducer } from './modules/glossaryQuest/reducer'

const appReducer = combineReducers({
    quest: questReducer
})

export default appReducer
