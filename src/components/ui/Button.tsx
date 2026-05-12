import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost' | 'danger' | 'purple';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'primary',
  className,
  children,
  onClick,
  type = 'button',
  disabled = false,
  external = false,
}) => {
  const base = cn(
    'relative inline-flex items-center justify-center gap-2 font-semibold font-body tracking-wide',
    'rounded-lg px-6 py-2.5 text-sm transition-all duration-300 select-none overflow-hidden group',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/60',
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
  );

  const variants: Record<string, string> = {
    primary: cn(
      'bg-brand-cyan text-brand-dark font-bold shadow-neon-sm',
      'hover:shadow-neon-cyan hover:scale-[1.04] active:scale-[0.98]',
    ),
    purple: cn(
      'bg-brand-purple text-white font-bold',
      'hover:shadow-neon-purple hover:scale-[1.04] active:scale-[0.98]',
    ),
    outline: cn(
      'border border-brand-cyan/40 text-brand-cyan bg-transparent',
      'hover:border-brand-cyan hover:bg-brand-cyan/10 hover:shadow-neon-sm hover:scale-[1.03] active:scale-[0.98]',
    ),
    ghost: cn(
      'text-gray-300 bg-white/5 border border-white/10',
      'hover:bg-white/10 hover:text-white hover:scale-[1.02] active:scale-[0.98]',
    ),
    danger: cn(
      'border border-brand-red/40 text-brand-red bg-transparent',
      'hover:border-brand-red hover:bg-brand-red/10',
    ),
  };

  const shimmer = variant === 'primary' ? (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full
                 transition-transform duration-700 ease-in-out
                 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    />
  ) : null;

  const classes = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
          {shimmer}
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes} onClick={onClick}>
        {shimmer}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {shimmer}
      {children}
    </button>
  );
};

export default Button;
