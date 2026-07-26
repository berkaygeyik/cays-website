import { Link } from 'react-router-dom'

interface ButtonLinkProps {
  to: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

function ButtonLink({
  to,
  children,
  variant = 'primary',
  className = '',
}: ButtonLinkProps) {
  const baseClasses =
    'inline-flex min-h-[52px] items-center justify-center rounded-full px-7 py-3 text-sm font-extrabold uppercase tracking-[0.14em] transition-all duration-300'

  const variantClasses =
    variant === 'primary'
      ? 'bg-black !text-white hover:-translate-y-1'
      : 'border border-black/20 bg-transparent !text-black hover:-translate-y-1 hover:bg-black hover:!text-white'

  return (
    <Link to={to} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </Link>
  )
}

export default ButtonLink