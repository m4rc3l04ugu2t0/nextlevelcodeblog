import { HTMLAttributes } from "react";

export default function H4(
  props: HTMLAttributes<HTMLHeadingElement>,
  className?: string
) {
  return (
    <h4
      className="text-gray-500 text-lg font-semibold mb-4"
      {...props}
    />
  )
}