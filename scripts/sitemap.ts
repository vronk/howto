import generate from '@stefanprobst/next-sitemap'

import { log } from '@/lib/util/log'
import { url as baseUrl } from '~/config/site.config'

const robots = ['User-agent: *', 'Disallow: /'].join('\n')

/**
 * Creates `sitemap.xml` and `robots.txt`.
 */
generate({ baseUrl, robots })
  .then(() =>
    log.success('Successfully created `sitemap.xml` and `robots.txt`.'),
  )
  .catch(log.error)
