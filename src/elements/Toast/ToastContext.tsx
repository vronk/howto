import 'react-toastify/dist/ReactToastify.css'

import type { ReactNode } from 'react'
import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'

export interface ToastProviderProps {
  children?: ReactNode
}

/**
 * Renders a container for toast notifications.
 *
 * This is not a context provider, but should be.
 */
export function ToastProvider(props: ToastProviderProps): JSX.Element {
  return (
    <Fragment>
      {props.children}
      <ToastContainer
        toastClassName={({ type } = {}) => {
          const shared =
            'relative mb-4 p-4 rounded shadow-md flex justify-between overflow-hidden cursor-pointer'
          switch (type) {
            case 'error':
              return [shared, 'bg-error-600 text-white'].join(' ')
            default:
              return [shared, 'bg-secondary-600 text-white'].join(' ')
          }
        }}
        bodyClassName="text-sm font-medium p-2 flex-1 mx-auto"
      />
    </Fragment>
  )
}
