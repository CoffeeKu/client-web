import { useState } from 'react'
import './App.css'
import NavbarTop from './components/NavbarTop'
import { Link } from 'react-router-dom'
import CategoryFilter from './components/CategoryFilter'
import CardMenu from './components/CardMenu'
import { convertToRupiah } from './utils/moneyConverter'

function App() {

  return (
    <>
      <div className='flex'>
        <section className='w-3/4 h-screen'>
          <NavbarTop />
          <div className='bg-green-500 h-screen overflow-y-scroll'>
            <CategoryFilter />
            <div className='flex flex-wrap'>
              <CardMenu />
              <CardMenu />
              <CardMenu />
              <CardMenu />
              <CardMenu />
              <CardMenu />
            </div>
          </div>
        </section>
        <aside className='w-1/4 bg-red-500 h-screen overflow-y-scroll'>
          <h1>Current Order</h1>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className='h-24'>
              <img
                src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?cs=srgb&dl=pexels-chevanon-312418.jpg&fm=jpg"
                alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Cappucino!</h2>
              <div className="card-actions justify-between">
                <p>2x</p>
                <span className='text-2xl'>{convertToRupiah(45000)}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

export default App
