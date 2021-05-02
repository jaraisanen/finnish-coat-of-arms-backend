import express from 'express'
import { getMunicipaltiesCtrl } from '../controllers/MunicipalityCtrl'

const router = express.Router()

router.get('/municipalities', getMunicipaltiesCtrl)

export const MunicipalityRoutes = router
