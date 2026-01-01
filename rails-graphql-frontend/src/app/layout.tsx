'use client'

import { ApolloProvider } from '@apollo/client/react'
import { apolloClient } from '../lib/apolloClient'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <ApolloProvider client={apolloClient}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  )
}
