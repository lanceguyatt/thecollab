'use client'

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24">
      <h1>{error.message || 'Something went wrong'}</h1>
      <button onClick={reset}>Try again</button>
    </main>
  )
}

export default error
