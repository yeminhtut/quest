import { get } from 'utils/net'
const url = 'https://api.binance.vision/api/glossaries'

export const getQuests = () => get(url, {}).then(res => res.data)
