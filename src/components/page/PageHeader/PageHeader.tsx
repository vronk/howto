import Link from 'next/link'

import { Logo } from '@/components/common/Logo/Logo'
import { useI18n } from '@/modules/i18n/useI18n'

/**
 * Page header.
 */
export function PageHeader(): JSX.Element {
  const { t } = useI18n()

  const links = [
    { label: t('common.page.posts'), path: '/posts' },
    { label: t('common.page.about'), path: '/about' },
  ]

  return (
    <header className="layout-grid px-8 py-8">
      <div className="flex items-center justify-between">
        <div>
          <Link href={{ pathname: '/' }}>
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <nav>
          <ul className="flex">
            {links.map((link) => {
              return (
                <li key={link.path} className="px-4 font-medium">
                  <Link href={{ pathname: link.path }}>
                    <a>{link.label}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
