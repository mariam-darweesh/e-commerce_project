import React from 'react'


export default function Card ({ children, className=""}) {
  return (
    <div className={`rounded-xl bg-gray-900 px-5 py-3 text-white font-medium hover:bg-gray-800 transition disabled:opacity-50 ${className}`}>
        {children}
    </div>
  )
}
