import { QueryResult } from 'pg'
import { query } from '../db_connection'

const table = 'public.municipalities'

export const getMunicipalities = async (): Promise<QueryResult<unknown>> => {
	return await query(`SELECT * FROM ${table}`)
}

export const getMunicipality = async (id: string): Promise<QueryResult<unknown>> => {
	return await query(`SELECT * FROM ${table} WHERE official_id='${id}'`)
}
