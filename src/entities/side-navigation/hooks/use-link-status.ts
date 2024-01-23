import { useMemo } from 'react'

import { usePathname } from 'next/navigation'

type Params = {
  href: string
}

export const useSideLinkStatus = ({ href }: Params) => {
  const pathname = usePathname()

  const isExternal = href.startsWith('http')

  const isActive = useMemo(() => {
    if (isExternal || pathname.length === 0) {
      return false
    }

    const splittedPathname = pathname.split('/')
    const currentPathname = splittedPathname[1] ?? ''

    return currentPathname === href.split('/')[1]
  }, [href, isExternal, pathname])

  return {
    isActive,
    isExternal,
  }
}
