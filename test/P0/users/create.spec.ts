import axios from 'axios'
import { UserFactory } from '../../../src/data/factory/user'

describe('POST users', () => {
    const endpoint = '/users'
    beforeAll(() => {})
    afterAll(() => {})

    beforeEach(() => {})
    afterEach(() => {})

    test('success', async () => {
        const userData = UserFactory.default()
        console.log(axios.defaults.baseURL)
        console.log(axios.defaults.headers.common.Authorization)

        const response = await axios.post(endpoint, userData)
        expect(response.status).toBe(201)
        expect(response.data).toHaveProperty('id')
        expect(response.data.name).toBe(userData.name)
        expect(response.data.email).toBe(userData.email)
        expect(response.data.gender).toBe(userData.gender)
        expect(response.data.status).toBe(userData.status)
    })

    describe('fails with', () => {
        test('invalid email', async () => {
            const userData = UserFactory.default({ email: 'invalid email' })
            let response
            try {
                response = await axios.post(endpoint, userData)
            } catch (error) {
                response = error.response
            }
            expect(response.status).toBe(422)
            expect(response.data).toStrictEqual([
                { field: 'email', message: 'is invalid' },
            ])
        })

        test('duplicate email', async () => {
            const userData = UserFactory.default()
            const duplicateUserData = UserFactory.default({
                email: userData.email,
            })
            await axios.post(endpoint, userData)

            let response
            try {
                response = await axios.post(endpoint, duplicateUserData)
            } catch (error) {
                response = error.response
            }
            expect(response.status).toBe(422)
            expect(response.data).toStrictEqual([
                { field: 'email', message: 'has already been taken' },
            ])
        })

        test('missing name', async () => {
            const userData = UserFactory.default()
            delete userData.name
            let response
            try {
                response = await axios.post(endpoint, userData)
            } catch (error) {
                response = error.response
            }
            expect(response.status).toBe(422)
            expect(response.data).toStrictEqual([
                { field: 'name', message: "can't be blank" },
            ])
        })
    })
})
