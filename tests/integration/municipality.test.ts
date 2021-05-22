import { agent } from 'supertest'
import { app } from '../../src/app'
import { basePath } from '../helpers'
import { munipalitiesTestData } from '../test-data/Municipalities'

const server = agent(app)

describe('GET /municipality', () => {
	it('should return existing municipality wit correct id', async done => {
		await server
			.get(`${basePath}/municipality/005`)
			.expect(200)
			.then(({ body }) => {
				expect(body).toHaveLength(1)
				const municipality = body[0]
				expect(municipality).toHaveProperty('official_id')
				expect(municipality).toHaveProperty('name')
				expect(municipality).toHaveProperty('file_url')
				expect(body[0]).toStrictEqual(munipalitiesTestData.municipality1)
				done()
			})
	})
	it('should return 404 with non-existing id', async done => {
		await server
			.get(`${basePath}/municipality/20263164`)
			.expect(404)
			.then(({ body }) => {
				expect(body).toHaveProperty('error')
				expect(body.error).toBe('No municipality found with id: 20263164')
				done()
			})
	})
})
