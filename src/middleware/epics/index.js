import { combineEpics } from 'redux-observable'
import _ from 'lodash'
import * as questEpics from './questEpics'

const combineEpicFunctions = epics => {
    return epics.reduce((arr, epic) => {
        return arr.concat(_.keysIn(epic).map(key => epic[key]))
    }, [])
}

const epics = combineEpicFunctions([questEpics])

export const rootEpic = combineEpics(...epics)
