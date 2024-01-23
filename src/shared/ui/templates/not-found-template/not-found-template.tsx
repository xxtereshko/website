import { ReactNode } from 'react'

type Props = {
  ActionNode?: ReactNode
  code?: string
  message?: string
}

export const NotFoundTemplate = ({ ActionNode, code, message }: Props) => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-1">
      {code && (
        <h2 className="text-3xl font-semibold text-numeric tracking-tight">
          {code}
        </h2>
      )}
      {message && (
        <p className="text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
      )}

      {ActionNode}
    </div>
  )
}
