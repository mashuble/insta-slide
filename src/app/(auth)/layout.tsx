import React from 'react'

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen flex justify-center items-center'>{children}</div>
  )
}

export default AuthLayout