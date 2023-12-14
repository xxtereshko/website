'use client'

import { KeyBindingMap, KeyBindingOptions, tinykeys } from '@shared/lib/event'
import { useEffect } from 'react'

export const useShortcuts = (
  keyBindingMap: KeyBindingMap,
  options?: KeyBindingOptions,
) => {
  useEffect(() => {
    const unsubscribe = tinykeys(window, keyBindingMap, options)

    return () => {
      unsubscribe()
    }
  }, [])
}
