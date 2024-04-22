import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'AudioVisual | Observatorio tecnológico - USS',
}

interface Props {
  children: React.ReactNode;
}
function NewsLayout({ children }: Props) {
  return (
    <div>
      {children}
    </div>
  )
}

export default NewsLayout