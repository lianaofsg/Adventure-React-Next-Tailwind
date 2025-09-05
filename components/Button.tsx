import React from 'react'
type ButtonProps = {
  type: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant: string
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}>
      {icon && <img src={icon} alt={title} width={24} height={24}></img> }
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button