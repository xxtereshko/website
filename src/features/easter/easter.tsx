'use client'

import { useShortcuts } from '@shared/hooks'
import { useCallback, useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'

const colors = ['#17A34A', '#2463EB', '#FACC14', '#F97315', '#7B39ED', '#E11D48']

export const Easter = () => {
  const [isExploding, setIsExploding] = useState(false)

  useShortcuts({
    'h u i': () => {
      setIsExploding(true)
    },
  })

  const handleComplete = useCallback(() => {
    setIsExploding(false)
  }, [])

  return (
    <div className="absolute top-0 inset-x-2/4 pointer-events-none">
      {isExploding && (
        <ConfettiExplosion
          colors={colors}
          duration={2000}
          force={0.3}
          particleCount={50}
          onComplete={handleComplete}
        />
      )}
    </div>
  )
}

export default Easter
