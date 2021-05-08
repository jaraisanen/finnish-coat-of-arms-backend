import { agent } from 'supertest'
import { app } from '../../src/app'
import { basePath } from '../helpers'

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
})
