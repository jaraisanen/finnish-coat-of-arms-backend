import { QueryResult } from 'pg'
import { query } from '../db_connection'

export const getMunicipalities = async (): Promise<QueryResult<unknown>> => {
	return await query('SELECT * FROM public.municipalities')
}
