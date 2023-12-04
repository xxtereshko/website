'use client'

import { Button } from '@shared/shadcn/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@shared/shadcn/ui/dropdown-menu'
import { PaletteIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <PaletteIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light">Светлая</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Тёмная</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">Системная</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
