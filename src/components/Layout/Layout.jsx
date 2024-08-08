import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}
