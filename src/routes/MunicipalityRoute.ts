import express from 'express'
import { getMunicipalitiesCtrl, getMunicipalityCtrl } from '../controllers/MunicipalityCtrl'

const router = express.Router()

router.get('/municipalities', getMunicipalitiesCtrl)
router.get('/municipality/:id', getMunicipalityCtrl)

export const MunicipalityRoutes = router
