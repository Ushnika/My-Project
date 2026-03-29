import { Skeleton } from '@/components/ui/skeleton'
import { nanoid } from 'nanoid'
import React from 'react'

interface CardSkeletonProps {
  count?: number
  columns?: string // for customizing grid columns
  height?: string // e.g., "h-40", "h-52", or even full class like "min-h-[200px]"
}

const CardSkeleton: React.FC<CardSkeletonProps> = ({
  count = 1,
  columns,
  height = 'h-44', // default height
}) => {
    const skeletonKeys = Array.from({ length: count }, () => nanoid())
  
  return (
    <div className={`grid gap-3 ${columns ?? 'grid-cols-1 md:grid-cols-2'}`}>
      {skeletonKeys.map((key) => (
        <Skeleton key={key} className={`${height} w-full rounded-lg bg-gray-200`} />
      ))}
    </div>
  )
}

export default CardSkeleton
