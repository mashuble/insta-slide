import { cn } from '@/lib/utils'
import React from 'react'
import { Spinner } from './spinner'

type LoaderProps = {
  state: boolean,
  className?: string
  children: React.ReactNode
  color?: string
}

function Loader({ state, className, children, color }: LoaderProps) {
    return state ? (
        <div className={cn(className)}>
            <Spinner color={color} />
        </div>
    ) : children;
}

export default Loader