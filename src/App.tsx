import { useState } from 'react'
import './App.css'
import NavbarTop from './components/NavbarTop'
import { Link } from 'react-router-dom'
import CategoryFilter from './components/CategoryFilter'
import CardMenu from './components/CardMenu'

function App() {

  return (
    <>
      <NavbarTop />
      <section className='container mx-auto'>
        <CategoryFilter />
        <div className='flex flex-wrap'>
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
          <CardMenu />
        </div>
      </section>
    </>
  )
}

export default App
