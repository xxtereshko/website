'use client'

import { useMemo, useState } from 'react'

import { ChevronLeft, MoreVertical } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { SideNavigation } from '@entities/side-navigation'
import { Button } from '@shared/shadcn/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerPortal,
  DrawerTrigger,
} from '@shared/shadcn/ui/drawer'

export const FloatingHeader = () => {
  const pathname = usePathname()

  const [isOpened, setIsOpened] = useState(false)

  const isHomeNested = useMemo(() => {
    return pathname.split('/').length < 3
  }, [pathname])

  return (
    <header className="lg:hidden flex border-b h-14 px-2 items-center">
      <Drawer open={isOpened} onOpenChange={setIsOpened}>
        <DrawerTrigger asChild>
          <Button className="md:hidden" size="sm" variant="ghost">
            <MoreVertical className="w-5 h-5" />
          </Button>
        </DrawerTrigger>
        <DrawerPortal>
          <DrawerContent className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[96%] rounded-t-[10px]">
            <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px]">
              <SideNavigation isCompact onClick={() => setIsOpened(false)} />
            </div>
          </DrawerContent>
        </DrawerPortal>
      </Drawer>

      {!isHomeNested && (
        <Button asChild size="sm" variant="ghost">
          <Link href="/writing">
            <ChevronLeft className="w-5 h-5" />
          </Link>
        </Button>
      )}
    </header>
  )
}
