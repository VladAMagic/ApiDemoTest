import axios from 'axios'
import { UserFactory } from '../../../src/data/factory/user'
import { faker } from '@faker-js/faker'

describe('endpoint fails with', () => {
    test('not found', async () => {
        let response
        try {
            response = await axios.get('/404/')
        } catch (error) {
            response = error.response
        }
        expect(response.status).toBe(404)
    })

    test('not authorized', async () => {
        let response
        try {
            response = await axios.get('/users/', {
                headers: {
                    Authorization: 'Bearer invalid_token',
                },
            })
        } catch (error) {
            response = error.response
        }
        expect(response.status).toBe(401)
    })

    //TO DO: fill out rest of codes suite.
})
