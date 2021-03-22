import type { CSSProperties, ReactNode } from 'react'

interface PageContentStyle extends CSSProperties {
  '--max-content-width'?: string
}

export interface PageContentProps {
  children?: ReactNode
  style?: PageContentStyle
}

/**
 * Page content.
 */
export function PageContent(props: PageContentProps): JSX.Element {
  return (
    /**
     * The `#main` id is the default target for `SkipNavLink`. It should be focusable,
     * because blink/webkit browers will try to move focus to a fragment identifier link
     * target. Firefox unfortunately does not.
     *
     * @see https://bugzilla.mozilla.org/show_bug.cgi?id=308064
     * @see https://github.com/vercel/next.js/issues/22838
     */
    <main id="main" tabIndex={-1} className="layout-grid" style={props.style}>
      {props.children}
    </main>
  )
}
