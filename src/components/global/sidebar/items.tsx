import { SIDEBAR_MENU } from '@/constants/menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

function Items({ slug, page }: { slug: string, page: string }) {
  return SIDEBAR_MENU.map((item) => (
    <Link href={`/dashboard/${slug}/${item.label === 'home' ? '/' : item.label}`} 
        key={item.id} 
        className={cn(
            'capitalize flex gap-x-2 rounded-full p-3',
            page === item.label && 'bg-[#0f0f0f]',
            page === slug && item.label === 'home' ? 'bg-[#0f0f0f]' : 'text-[#9B9CA0]'
        )}
    >
        {item.icon}
        {item.label}
    </Link>
  ))
}

export default Items