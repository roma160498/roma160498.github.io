type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps  {
  variant?: ButtonVariant;
  className?: string;
  children: any;
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition';

  const variantClasses = {
    primary:
      'bg-cyan-500 text-slate-950 hover:bg-cyan-400',
    secondary:
      'border border-white/15 text-white hover:bg-white/5',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}