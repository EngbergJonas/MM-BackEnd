const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)
describe('getting all members', () => {
  test('board is returned as json', async () => {
    await api.get('/api/board').expect(200).expect('Content-Type', /application\/json/)
  })

  test('the first member is Kimmo', async () => {
    const response = await api.get('/api/board')

    expect(response.body[0].ForNamn).toBe('Kimmo')
  })
})

describe('getting a single member', () => {
  test('a single member can be found', async () => {
    const id = '2'
    await api.get(`/api/board/${id}`).expect(200).expect('Content-Type', /application\/json/)
  })

  test('wrong id will return 404', async () => {
    const id = '300'
    await api.get(`/api/board/${id}`).expect(404)
  })
})
