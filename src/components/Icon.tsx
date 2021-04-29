import React from 'react'

export const Icon = ({ prefix, icon }: { prefix?: string, icon: string }) => {
  return (
    <i className={(prefix ? (prefix + " ") : "fa ") + icon}></i>
  )
}
