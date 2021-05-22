import express, { NextFunction, Request, Response } from 'express'
import rateLimit from 'express-rate-limit'
import { ResponseError } from './interfaces/Common'
import { MunicipalityRoutes } from './routes/MunicipalityRoute'

const BASE_PATH = '/finnish-coat-of-arms'
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get(`${BASE_PATH}/`, (req, res) => {
	res.status(200).json({ status: 200 })
})
app.use(BASE_PATH, MunicipalityRoutes)
// Use trust proxy to make rateLimiter work behind Heroku
app.set('trust proxy', 1)

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 50 // limit each IP to 100 requests per windowMs
})

app.use(limiter)

app.use((err: ResponseError, req: Request, res: Response, next: NextFunction) => {
	err.statusCode = err.statusCode || 500
	err.status = err.status || 'error'

	return res.status(err.statusCode).json({
		status: err.status,
		message: err.message
	})
})

export { app }
