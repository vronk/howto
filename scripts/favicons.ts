import generate from '@stefanprobst/favicons'
import * as path from 'path'

import { log } from '@/lib/util/log'
import metadata from '~/config/metadata.config'
import { defaultLocale, webManifest } from '~/config/site.config'

/**
 * Creates favicons and webmanifest for all locales.
 */
Promise.all(
  Object.entries(metadata).map(([locale, { favicon, shortTitle, title }]) =>
    generate({
      inputFilePath: favicon.src,
      outputFolder:
        locale === defaultLocale ? 'public' : path.join('public', locale),
      name: title,
      shortName: shortTitle,
      maskable: true,
      color: '#fff',
      manifestFileName: webManifest,
    }),
  ),
)
  .then(() => log.success('Successfully generated favicons.'))
  .catch(log.error)
