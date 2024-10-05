import { HTMLAttributes } from 'react'

export default function H3(
  props: HTMLAttributes<HTMLHeadingElement>,
  className?: string
) {
  return (
    <h3
      className={className || 'responsive-reading text-xl font-semibold mb-4'}
      {...props}
    />
  )
}
