export interface ResponseError extends Error {
	statusCode?: number
	status?: string
}
