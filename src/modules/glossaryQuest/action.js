import { generateApiActions } from 'utils/reduxHelper'

export const actions = {
    ...generateApiActions('quest', ['GET_ALL'])
}
