import { Pool, QueryResult } from 'pg'

const env = process.env
const isLocalEnv = env.NODE_ENV === 'local'

const user = isLocalEnv ? env.LOCAL_DB_USER : env.DB_USER
const password = isLocalEnv ? env.LOCAL_DB_PASSWORD : env.DB_PASSWORD
const host = isLocalEnv ? env.LOCAL_DB_HOST : env.DB_HOST
const port = isLocalEnv ? Number(env.LOCAL_DB_PORT) : Number(env.DB_PORT)
const database = isLocalEnv ? env.LOCAL_DB : env.DB

const pool = new Pool({
	user,
	password,
	host,
	database,
	port
})

export const query = async (text: string, params?: never): Promise<QueryResult<unknown>> => {
	try {
		return await pool.query(text, params)
	} catch (error) {
		console.error('Error with DB query: ', error)
	}
}
