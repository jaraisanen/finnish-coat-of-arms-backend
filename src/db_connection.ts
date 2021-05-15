import { Pool, QueryResult } from 'pg'

const user = process.env.LOCAL_DB_USER
const password = process.env.LOCAL_DB_PASSWORD
const host = process.env.LOCAL_DB_HOST
const port = Number(process.env.LOCAL_DB_PORT)
const database = process.env.LOCAL_DB

console.log('connection string', user, password, host, port, database)

const pool = new Pool({
	user,
	password,
	host,
	port,
	database,
	ssl: {
		rejectUnauthorized: false,
	},
})

export const query = (text: string, params?: never): Promise<QueryResult<unknown>> => pool.query(text, params)
