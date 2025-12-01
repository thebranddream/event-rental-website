import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button" | "a"
  href?: string
  variant?: "primary" | "secondary" | "text"
  target?: string
  rel?: string
}

export default function Button({
  as = "button",
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    text: "btn-text",
  }

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (as === "a") {
    return (
      <a href={href} className={combinedClasses} {...(props as any)}>
        {children}
      </a>
    )
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  )
}
