import { Pool, QueryResult } from 'pg'

const user = process.env.LOCAL_DB_USER
const password = process.env.LOCAL_DB_PASSWORD
const host = process.env.LOCAL_DB_HOST
const port = Number(process.env.LOCAL_DB_PORT)
const database = process.env.LOCAL_DB

const pool = new Pool({
	user,
	password,
	host,
	database,
	port,
})

export const query = async (text: string, params?: never): Promise<QueryResult<unknown>> => {
	try {
		return await pool.query(text, params)
	} catch (error) {
		setImmediate(() => {
			throw error
		})
	}
}
