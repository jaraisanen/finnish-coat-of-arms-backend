import { Request, Response, NextFunction } from 'express'

import { getMunicipalities, getMunicipality } from '../services/MunicipalityService'

export const getMunicipalitiesCtrl = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const municipalities = await getMunicipalities()
		res.json(municipalities.rows)
	} catch (error) {
		next(error)
	}
}

export const getMunicipalityCtrl = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const { id } = req.params
	try {
		const municipality = await getMunicipality(id)
		if (municipality.rows.length === 0) {
			res.status(404).send({ error: `No municipality found with id: ${id}` })
		} else {
			res.json(municipality.rows)
		}
	} catch (error) {
		next(error.stack)
	}
}
