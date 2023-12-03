import { InstagramIcon } from 'lucide-react'

type Props = {
  children: React.ReactNode
}

export default function AuthenticationPage({ children }: Props) {
  return (
    <div className="container relative h-[calc(100dvh)] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <div className="mr-2 h-6 w-6">
            <InstagramIcon />
          </div>
          Acme Inc.
        </div>

        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and helped me
              deliver stunning designs to my clients faster than ever before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>

      <div className="lg:p-8">{children}</div>
    </div>
  )
}
