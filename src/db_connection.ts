import { Pool, QueryResult } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const user = process.env.DB_USER
const pw = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const db = process.env.DB_DATABASE

const connectionString = `postgres://${user}:${pw}@${host}:${port}/${db}`

const pool = new Pool({
	connectionString,
	ssl: {
		rejectUnauthorized: false,
	},
})

export const query = (text: string, params?: never): Promise<QueryResult<unknown>> => pool.query(text, params)
