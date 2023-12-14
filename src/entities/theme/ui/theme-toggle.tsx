'use client'

import { Button } from '@shared/shadcn/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from '@shared/shadcn/ui/dropdown-menu'
import { PaletteIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { themeVariants } from '../constants'

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <PaletteIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" className="w-36">
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {Object.entries(themeVariants).map(variant => {
            const [value, label] = variant

            return (
              <DropdownMenuItem key={value} onClick={() => setTheme(value)}>
                {label}
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
