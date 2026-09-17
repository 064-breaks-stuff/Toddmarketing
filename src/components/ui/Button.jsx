import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Button({
  to,
  children,
  variant = 'primary',
  className = '',
  onClick,
  ...props
}) {
  return (
    <Link
      className={`button button--${variant} ${className}`.trim()}
      to={to}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </Link>
  );
}