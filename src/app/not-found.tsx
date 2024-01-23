import { Sparkles } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@shared/shadcn/ui/button'
import { NotFoundTemplate } from '@shared/ui/templates'

export default function NotFound() {
  const renderAction = () => {
    return (
      <Button asChild className="mt-2" variant="ghost">
        <Link href="/">
          <Sparkles className="w-4 h-4 mr-2" />
          Back to home
        </Link>
      </Button>
    )
  }

  return (
    <NotFoundTemplate
      ActionNode={renderAction()}
      code="404."
      message="The page you're looking for doesn't exist."
    />
  )
}
