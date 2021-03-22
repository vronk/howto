import { HttpError } from '@/lib/error/HttpError'
import { createUrl } from '@/lib/url/createUrl'

export interface RequestConfig<T> {
  path: string
  baseUrl?: string
  query?: Record<string, unknown>
  options?: RequestInit
  hooks?: {
    request?: (request: Request) => Request
    response?: (response: Response) => Promise<T>
  }
  token?: string
  returnType?: 'json'
}

/**
 * Dispatches HTTP request.
 */
export async function request<T = unknown>({
  path,
  baseUrl,
  query,
  options,
  hooks = {},
  token,
  returnType = 'json',
}: RequestConfig<T>): Promise<T> {
  const url = createUrl({ path, baseUrl, query })

  const _request = new Request(url.toString(), options)
  const request =
    typeof hooks.request === 'function' ? hooks.request(_request) : _request

  if (token !== undefined && token.length > 0) {
    request.headers.set('Authorization', token)
  }

  const response = await fetch(request)

  if (!response.ok) {
    const message = await getErrorMessage(response)

    throw new HttpError(response, message)
  }

  return typeof hooks.response === 'function'
    ? hooks.response(response)
    : response[returnType]()
}

/**
 * Retrieves error message from HTTP response.
 */
async function getErrorMessage(
  response: Response,
): Promise<string | undefined> {
  if (response.headers.get('Content-Type') !== 'application/json') {
    return undefined
  }

  const data = await response.json()

  if (typeof data.message === 'string') {
    return data.message
  } else if (data.error !== undefined) {
    if (typeof data.error === 'string') {
      return data.error
    } else if (typeof data.error.message === 'string') {
      return data.error.message
    }
  } else if (Array.isArray(data.errors)) {
    const [error] = data.errors
    if (typeof error === 'string') {
      return error
    } else if (typeof error.message === 'string') {
      return error.message
    }
  }

  return undefined
}
