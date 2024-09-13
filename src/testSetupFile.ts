import axios from 'axios'
import { TokenManager } from './token.management'

console.log(`============ testSetupFile Loaded ===========`)

jest.setTimeout(99999999)

jest.retryTimes(0, { logErrorsBeforeRetry: true })
axios.defaults.baseURL = process.env.BASE_URL

beforeAll(async () => {
    await new TokenManager().fetchToken().then((token: any) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Accept'] = 'application/json'
    })
})
