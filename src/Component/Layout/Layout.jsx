import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
 <Nav/>
  {/* Routing Here */}
  <Outlet></Outlet>
  <Footer/>
  </>
}
