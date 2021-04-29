import React from 'react'

type IconParams = { prefix?: string, icon: string }
export const Icon = ({ prefix, icon }: IconParams) => {
  return (
    <i className={(prefix ? (prefix + " ") : "fa ") + icon}></i>
  )
}
