import { NotFoundTemplate } from '@shared/ui/templates'

export default function NotFound() {
  return (
    <NotFoundTemplate
      code="404."
      message="The writing you're looking for doesn't exist."
    />
  )
}
