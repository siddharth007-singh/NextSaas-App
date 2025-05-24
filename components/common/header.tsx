import { FileText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button';
import NavLink from './nav-link';

const Header = () => {
    const isLoggedIn = false;
    return (
        <div className="p-4">
            <nav className='container flex items-center justify-between py-4 px-2 mx-auto'>
                <div className='flex lg:flex-1'>
                    <NavLink href="/" className='flex items-center gap-1'>
                        <FileText className='w-5 h-5 lg:w-8 lg:h-8 hover:rotate-12 transform transition duration-200 ease-in-out' />
                        <span className='font-extrabold lg:text-xl text-gray-900'>Sommaire</span>
                    </NavLink>
                </div>

                <div className='flex lg:justify-center gap-4 lg:gap-12 lg:items-center'>
                    <NavLink href="/#pricing">Pricing</NavLink>
                    {isLoggedIn && <NavLink href="/dashboard">Your Summaries</NavLink>}
                </div>

                <div className='flex lg:justify-end lg:flex-1 '>
                    {isLoggedIn ? (
                        <div className='flex gap-2 items-center'>
                            <NavLink href="/upload">Upload a PDF</NavLink>
                            <div>Pro</div>
                            <Button>Sign Out</Button>
                        </div>
                    ) : (
                        <div>
                            <NavLink href="/sign-in">SignIn</NavLink>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Header