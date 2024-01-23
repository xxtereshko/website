'use client'

import { SunMoonIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { useShortcuts } from '@shared/hooks'
import { Button } from '@shared/shadcn/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@shared/shadcn/ui/dropdown-menu'

import { themeVariants } from '../constants'

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()

  useShortcuts({
    'Shift+KeyD': () => setTheme('dark'),
    'Shift+KeyL': () => setTheme('light'),
    'Shift+KeyS': () => setTheme('system'),
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-label="Изменение темы" className="mt-2 mx-auto" variant="ghost">
          <SunMoonIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" className="w-36">
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {Object.entries(themeVariants).map(variant => {
            const [value, data] = variant

            return (
              <DropdownMenuItem key={value} onClick={() => setTheme(value)}>
                {data.label}
                <DropdownMenuShortcut>{data.shortcut}</DropdownMenuShortcut>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
