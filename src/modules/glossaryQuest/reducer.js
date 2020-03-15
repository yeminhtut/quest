import { actionTypes } from 'appActions'
import { generateDefaultState, handleGeneratedApiActions } from 'utils/reduxHelper'

const defaultState = {
    ...generateDefaultState('quest', ['GET_ALL'])
}

function questReducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.QUEST.QUEST_GET_ALL_REQUEST:
            return {
                ...state,
                isLoadingGetAllQuest: true,
                error: null
            }

        case actionTypes.QUEST.QUEST_GET_ALL_RESPONSE:
            return {
                ...state,
                isLoadingGetAllQuest: false,
                error: action.error,
                questList: action.payload.list
            }

        default:
            return handleGeneratedApiActions(state, action, 'QUEST')
    }
}

export { questReducer, defaultState }
