import React from 'react'
import Navbar from './Navbar'
import Presentation from './Presentation'
import Projects from './Projects'
import Abilities from './Abilities'
import Contact from './Contact'

export default function Layout() {
  return (
    <div className='min-h-screen bg-neutral-300'>
      {/* <Navbar /> */}
      <Presentation />
      <Projects />
      <Abilities />
      <Contact />
    </div>
  )
}
