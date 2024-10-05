import { HTMLAttributes } from 'react'

export default function Div(
  props: HTMLAttributes<HTMLDivElement>,
  className?: string
) {
  return <div className={className} {...props} />
}
