export default function Pre(data: { data: object }) {
  return (
    <div className="prose">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
