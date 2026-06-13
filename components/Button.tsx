import Link from 'next/link'
import React from 'react'
type ButtonProps = {
  type: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  href?: string;
}

const Button = ({ type, title, icon, variant, full, href }: ButtonProps) => {
  const className = `flexCenter gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''}`

  if (href) {
    return (
      <Link href={href} className={className}>
        {icon && <img src={icon} alt={title} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
      </Link>
    )
  }

  return (
    <button className={className} type={type}>
      {icon && <img src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button