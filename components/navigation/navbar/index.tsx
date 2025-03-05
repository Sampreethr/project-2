import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { ThemeToggle } from '@/components/theme-toggle'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12 bg-light-900 dark:bg-dark-200">
        <Link href="/" className="flex items-center gap-2">
            <Image 
                src="/images/site-logo.svg"
                width={28}
                height={28}
                alt="DevFlow Logo"
                className="object-contain"
            />
            <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
                Dev<span className="text-primary-500">Flow</span>
            </p>
        </Link>
        <div className="flex-1 flex items-center justify-center max-w-[600px] mx-auto">
            <div className="relative w-full">
                <input 
                    type="text"
                    placeholder="Search anything..."
                    className="w-full bg-light-800 dark:bg-dark-300 border border-light-700 dark:border-dark-400 rounded-lg py-3 px-4 pl-12 text-dark-100 dark:text-light-900 focus:outline-none focus:border-primary-500 transition-colors"
                />
                <Image
                    src="/images/search.svg"
                    alt="search"
                    width={24}
                    height={24}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-light-500 dark:text-dark-500"
                />
            </div>
        </div>
        <div className="flex items-center gap-4">
            <ThemeToggle />
        </div>
    </nav>
  );
};

export default NavBar