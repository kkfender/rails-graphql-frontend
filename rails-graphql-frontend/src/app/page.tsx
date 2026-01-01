'use client'

import { useQuery } from '@apollo/client/react'
import type { UserQuery, UserQueryVariables } from '@/generated/graphql'
import { UserDocument } from '@/generated/graphql'

export default function Page() {
  const { data, loading, error } = useQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    {
      variables: { id: '1' },
    }
  )

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return <div>{data?.user?.name}</div>
}
