import axios from 'axios'
import { UserFactory } from '../../../src/data/factory/user'

describe('POST users', () => {
    const endpoint = '/users'
    beforeAll(() => {})
    afterAll(() => {})

    beforeEach(() => {})
    afterEach(() => {})

    test('with numbers in name', async () => {
        const userData = UserFactory.default({ name: '123ABC' })
        const response = await axios.post(endpoint, userData)

        expect(response.status).toBe(201)
        expect(response.data).toHaveProperty('id')
        expect(response.data.name).toBe(userData.name)
        expect(response.data.email).toBe(userData.email)
        expect(response.data.gender).toBe(userData.gender)
        expect(response.data.status).toBe(userData.status)
    })
    //TO DO: fill out regression suite.
})
