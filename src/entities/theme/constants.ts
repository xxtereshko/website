import { TThemeVariant } from './types'

export const themeVariants: Record<
  TThemeVariant,
  {
    label: string
    shortcut: string
  }
> = {
  light: {
    label: 'Светлая',
    shortcut: '⇧+L',
  },
  dark: {
    label: 'Тёмная',
    shortcut: '⇧+D',
  },
  system: {
    label: 'Системная',
    shortcut: '⇧+S',
  },
}
