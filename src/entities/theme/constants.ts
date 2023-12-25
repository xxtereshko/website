import { TThemeVariant } from './types'

export const themeVariants: Record<
  TThemeVariant,
  {
    label: string
    shortcut: string
  }
> = {
  dark: {
    label: 'Тёмная',
    shortcut: '⇧+D',
  },
  light: {
    label: 'Светлая',
    shortcut: '⇧+L',
  },
  system: {
    label: 'Системная',
    shortcut: '⇧+S',
  },
}
