import { agent } from 'supertest'
import { app } from '../../src/app'
import { basePath } from '../helpers'
import { munipalitiesTestData } from '../test-data/Municipalities'

const appWithoutRunLogs = agent(app)

describe('GET /municipalities', () => {
	it('should return all municipalities', async done => {
		await appWithoutRunLogs
			.get(`${basePath}/municipalities`)
			.expect(200)
			.then(({ body }) => {
				expect(body).toHaveLength(309)
				done()
			})
	})
	it('should return municipalities in correct order', async done => {
		await appWithoutRunLogs
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
				done()
			})
	})
})
