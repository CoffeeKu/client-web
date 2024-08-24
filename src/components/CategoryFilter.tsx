import React from 'react'

export default function CategoryFilter() {
    const categories: string[] = ['All', 'Coffee', 'Non Coffee', 'Food', 'Snacks', 'Dessert']
    return (
        <>
            <nav className='flex gap-5'>
                {
                    categories.map((category) => {
                        return (
                            <button type='button' className='btn'>{category}</button>
                        )
                    })
                }
            </nav>

        </>
    )
}
