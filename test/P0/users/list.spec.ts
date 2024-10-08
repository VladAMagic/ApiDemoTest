import axios from 'axios'

describe('GET users', () => {
    beforeAll(() => {})
    afterAll(() => {})

    beforeEach(() => {})
    afterEach(() => {})

    test('success', async () => {
        let response
        try {
            response = await axios.get('/users')
        } catch (error) {
            response = error.response
        }
        expect(response.status).toBe(200)
        expect(response.data).toHaveLength(10)
        expect(response.data[0]).toHaveProperty('id')
        expect(response.data[0]).toHaveProperty('email')
        expect(response.data[0]).toHaveProperty('gender')
        expect(response.data[0]).toHaveProperty('status')
        expect(response.data[0]).toHaveProperty('name')
    })
})
