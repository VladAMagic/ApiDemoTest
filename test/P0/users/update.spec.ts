import axios from 'axios'
import { UserFactory } from '../../../src/data/factory/user'
import { UserModel } from '../../../src/data/models/user'
import { StatusEnum } from '../../../src/data/enums/status'

describe('PATCH users', () => {
    let endpoint = '/users'
    let originalUserData: UserModel
    beforeAll(() => {})
    afterAll(() => {})

    beforeEach(async () => {
        originalUserData = UserFactory.default({ status: StatusEnum.inactive })
        const response = await axios.post('/users', originalUserData)

        expect(response.data.status).toBe('inactive')
        originalUserData.id = response.data.id
        endpoint = '/users/' + originalUserData.id
    })

    afterEach(() => {})

    test('success', async () => {
        const response = await axios.patch(endpoint, {
            status: StatusEnum.active,
        })

        expect(response.status).toBe(200)
        expect(response.data).toHaveProperty('id')
        expect(response.data.name).toBe(originalUserData.name)
        expect(response.data.email).toBe(originalUserData.email)
        expect(response.data.gender).toBe(originalUserData.gender)
        expect(response.data.status).toBe('active')
    })

    describe('fails with', () => {
        test('invalid email', async () => {
            let response
            try {
                response = await axios.patch(endpoint, {
                    email: 'invalid email',
                })
            } catch (error) {
                response = error.response
            }
            expect(response.status).toBe(422)
            expect(response.data).toStrictEqual([
                { field: 'email', message: 'is invalid' },
            ])
        })

        test('changing email to duplicate email', async () => {
            const duplicateUserData = UserFactory.default()
            await axios.post('/users', duplicateUserData)

            let response
            try {
                response = await axios.patch(endpoint, {
                    email: duplicateUserData.email,
                })
            } catch (error) {
                response = error.response
            }
            expect(response.status).toBe(422)
            expect(response.data).toStrictEqual([
                { field: 'email', message: 'has already been taken' },
            ])
        })
    })
})
