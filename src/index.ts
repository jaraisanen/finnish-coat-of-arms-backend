import { app } from './app'

export const server = app.listen(process.env.PORT || 8000, () =>
	console.log(`Server listening on port ${process.env.PORT || 8000} on environment ${process.env.NODE_ENV} `)
)
