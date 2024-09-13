import axios from 'axios'
import { UserFactory } from '../../../src/data/factory/user'
import { UserModel } from '../../../src/data/models/user'
import { StatusEnum } from '../../../src/data/enums/status'

describe('DELETE users', () => {
    let endpoint = '/users'
    let originalUserData: UserModel
    beforeAll(() => {})
    afterAll(() => {})

    beforeEach(async () => {
        originalUserData = UserFactory.default({ status: StatusEnum.inactive })
        const createResponse = await axios.post(endpoint, originalUserData)

        expect(createResponse.status).toBe(201)
        originalUserData.id = createResponse.data.id
        endpoint = '/users/' + originalUserData.id
        const getResponse = await axios.get(endpoint)

        expect(getResponse.status).toBe(200)
    })

    afterEach(() => {})

    test('success', async () => {
        const deleteResponse = await axios.delete(endpoint)

        expect(deleteResponse.status).toBe(204)

        let getResponse
        try {
            getResponse = await axios.get(endpoint)
        } catch (error) {
            getResponse = error.response
        }

        expect(getResponse.status).toBe(404)
    })
})
