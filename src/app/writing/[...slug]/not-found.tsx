import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center w-full h-screen bg-dashed">
      <h2 className="text-2xl font-semibold mb-2">Page not found</h2>
      <p className="text-sm">Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
