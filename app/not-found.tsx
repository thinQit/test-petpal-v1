import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <h2 className="text-4xl font-bold mb-3">Page not found</h2>
      <p className="text-muted-foreground mb-6">Sorry, we couldn’t find that page.</p>
      <Link href="/" className="bg-primary text-primary-foreground rounded-xl px-6 py-3 font-semibold transition-all duration-200 hover:scale-105">
        Back to Home
      </Link>
    </div>
  )
}
