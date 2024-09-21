import React from 'react'

function NavBar() {
    return (
        <div className='flex static items-center justify-center w-[100vw] h-auto bg-transparent py-4 gap-10'>
            <a className='text-base text-slate-50' href='/home'>HOME</a>
            <a className='text-base text-slate-50' href='/about'>ABOUT</a>
            <a className='text-base text-slate-50' href='/projects'>PROJECTS</a>
        </div>
    )
}

export default NavBar