import { HTMLAttributes } from 'react'

export default function P(props: HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} />
}
