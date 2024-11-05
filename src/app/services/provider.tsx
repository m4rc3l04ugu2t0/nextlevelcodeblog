'use client'

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import queyCliant from "./queyCliant";

export default function Provider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(queyCliant)
  return (
    <QueryClientProvider client={queyCliant}>
      {children}
    </QueryClientProvider>
  )
}