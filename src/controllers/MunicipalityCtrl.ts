import { Request, Response, NextFunction } from 'express'

import { getMunicipalities } from '../services/MunicipalityService'

export const getMunicipaltiesCtrl = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const municipalities = await getMunicipalities()
		res.json(municipalities.rows)
	} catch (error) {
		next(error)
	}
}
