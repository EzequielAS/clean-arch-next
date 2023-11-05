'use client'

export default function ErrorRoot({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div>
      <h1>Error: {error.message}</h1>
      <button onClick={reset}>Try again</button>
    </div> 
  )
}
