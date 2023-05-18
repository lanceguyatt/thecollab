export default function Container({
  class: className = '',
  children,
}: {
  class?: string
  children: React.ReactNode
}) {
  return <div className={`container ${className}`}>{children}</div>
}
