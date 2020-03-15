import { ofType } from 'redux-observable'
import { of, from } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'
import { actionTypes, actions } from 'appActions'
import { transformApiToState } from 'modules/glossaryQuest/transformer'
import * as Api from 'modules/glossaryQuest/api'

export const getQuestListEpic = action$ =>
    action$.pipe(
        ofType(actionTypes.QUEST.QUEST_GET_ALL_REQUEST),
        switchMap(action => {
            return from(Api.getQuests(action.payload)).pipe(
                map(data =>
                    actions.QUEST.QUEST_GET_ALL_RESPONSE(null, {
                        list: transformApiToState('list')(data)
                    })
                ),
                catchError(err => of(actions.QUEST.QUEST_GET_ALL_RESPONSE(err, {})))
            )
        })
    )
