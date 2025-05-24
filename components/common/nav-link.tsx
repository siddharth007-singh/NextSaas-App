"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface NavLinksProps{
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink:React.FC<NavLinksProps> = ({href, children, className}) => {

  const pathname = usePathname();

  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return <Link href={href} className={cn('transition-colors text-sm duration-100 text-gray-600 hover:text-rose-500', className, isActive && 'text-rose-500')}>{children}</Link>
}

export default NavLink