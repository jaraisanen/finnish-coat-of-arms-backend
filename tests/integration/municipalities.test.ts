import { agent } from 'supertest'
import { app } from '../../src/app'
import { basePath } from '../helpers'
import { munipalitiesTestData } from '../test-data/Municipalities'

const server = agent(app)

describe('GET /municipalities', () => {
	it('should return all municipalities', async () => {
		await server
			.get(`${basePath}/municipalities`)
			.expect(200)
			.then(({ body }) => {
				expect(body).toHaveLength(309)
			})
	})
	it('should return municipalities in correct order', async () => {
		await server
			.get(`${basePath}/municipalities`)
			.expect(200)
			.then(({ body }) => {
				const alajarviMunicipality = body[0]
				expect(alajarviMunicipality).toHaveProperty('official_id')
				expect(alajarviMunicipality).toHaveProperty('name')
				expect(alajarviMunicipality).toHaveProperty('file_url')
				expect(body[0]).toStrictEqual(munipalitiesTestData.municipality1)
				expect(body[1]).toStrictEqual(munipalitiesTestData.municipality2)
				expect(body[308]).toStrictEqual(munipalitiesTestData.municipality3)
			})
	})
})
