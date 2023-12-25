'use client'

import { useEffect } from 'react'

import { KeyBindingMap, KeyBindingOptions, tinykeys } from '@shared/lib/event'

export const useShortcuts = (
  keyBindingMap: KeyBindingMap,
  options?: KeyBindingOptions,
) => {
  useEffect(() => {
    const unsubscribe = tinykeys(window, keyBindingMap, options)

    return () => {
      unsubscribe()
    }
  }, [keyBindingMap, options])
}
