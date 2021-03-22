/**
 * HTTP Error.
 */
export class HttpError extends Error {
  name = 'HttpError'
  statusCode: number

  constructor(response: Response, message?: string) {
    super(message ?? response.statusText)
    this.statusCode = response.status
  }
}
