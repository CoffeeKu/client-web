import React from 'react'
import { convertToRupiah } from '../utils/moneyConverter'

export default function CardMenu() {
    return (
        <>
            <div className="w-1/4 p-3">
                <div className="card bg-base-100 shadow-xl">
                    <figure className='h-48'>
                        <img
                            src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?cs=srgb&dl=pexels-chevanon-312418.jpg&fm=jpg"
                            alt="Menu" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Cappucino!</h2>
                        <p>The combination of coffee, milk, and palm sugar makes this drink has a delicious</p>
                        <div className="card-actions justify-start">
                            <span className='text-2xl'>{convertToRupiah(45000)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
