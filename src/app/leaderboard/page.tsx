import { Leaderboard } from '../components/leaderboard'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function LeaderboardPage({ searchParams }: Props) {
  // Handle both single batch parameter and multiple batch parameters
  const batchParams = (await searchParams).batch
  const batches = Array.isArray(batchParams)
    ? batchParams.map(Number)
    : batchParams?.includes(',')
    ? batchParams.split(',').map(Number)
    : batchParams
    ? [Number(batchParams)]
    : undefined

  // Handle graduates filter
  const graduatesOnly = (await searchParams).graduates === 'true'

  return (
    <main>
      <Leaderboard batches={batches} graduatesOnly={graduatesOnly} />
    </main>
  )
} 