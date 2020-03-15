import { generateReduxActions } from './utils/reduxHelper'
import { actions as questActions } from './modules/glossaryQuest/action'
const { actions, actionTypes } = generateReduxActions([
    {
        namespace: 'QUEST',
        actions: questActions
    }
])

export { actions, actionTypes }
