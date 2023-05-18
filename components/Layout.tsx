import Alert from 'components/Alert'

export default function Layout({
  preview,
  loading,
  children,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} loading={loading} />
        <main>{children}</main>
      </div>
    </>
  )
}
