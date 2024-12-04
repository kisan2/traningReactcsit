import React from 'react'
import Header from '../Components/Navigation/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header />
<div>
    {/* {children} */}
    <Outlet />
</div>
      <Footer />
    </div>
  )
}

export default Layout
