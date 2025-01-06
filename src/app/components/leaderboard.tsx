type LeaderboardData = {
  address: string
  ens: string
  challengesCompleted: number
  points: number
  totalGasUsed: number
  rank: number
}

type BuilderData = {
  id: string
  batch?: {
    number: string
    status: string
  }
  ens?: string
}

type Data = {
  leaderboard: LeaderboardData[]
}

type LeaderboardProps = {
  batches?: number[]
  graduatesOnly?: boolean
}

const tableCellStyles = 'px-6 block border-l-2 border-gray-200 leading-tight'

export async function Leaderboard({ batches, graduatesOnly = false }: LeaderboardProps) {
  // First fetch all builders to get batch information
  const buildersResponse = await fetch('https://buidlguidl-v3.ew.r.appspot.com/builders', {
    cache: 'no-store', // Prevent caching
  })
  const builders: BuilderData[] = await buildersResponse.json()
  
  // Create maps for batch number and graduate status
  const builderBatchMap = new Map<string, number | undefined>()
  const builderGraduateMap = new Map<string, boolean>()
  
  builders.forEach(builder => {
    const address = builder.id.toLowerCase()
    builderBatchMap.set(
      address,
      builder.batch ? parseInt(builder.batch.number) : undefined
    )
    builderGraduateMap.set(
      address,
      builder.batch?.status === 'graduate'
    )
  })
  
  // Fetch leaderboard data
  const response = await fetch('https://ethdevtechtree.buidlguidl.com/leaderboard',{
    cache: 'no-store', // Prevent caching
  })
  const data: Data | null = await response.json()

  if (!response.ok || !data || data.leaderboard.length === 0) {
    return null
  }

  // Filter leaderboard based on batches and graduate status if specified
  const filteredLeaderboard = data.leaderboard.filter(entry => {
    const address = entry.address.toLowerCase()
    const builderBatch = builderBatchMap.get(address)
    const isGraduate = builderGraduateMap.get(address)

    // Check graduate status if required
    if (graduatesOnly && !isGraduate) {
      return false
    }

    // Check batch if specified
    if (batches) {
      return builderBatch !== undefined && batches.includes(builderBatch)
    }

    return true
  })

  // Determine if we should show the batch column
  const showBatchColumn = batches && batches.length > 1

  // If no entries match the filter, show a message
  if (filteredLeaderboard.length === 0) {
    return (
      <div className="pt-24 mx-auto max-w-5xl px-6 min-h-screen">
        <h2 className="text-center text-4xl lg:text-6xl font-bold uppercase">
          Leaderboard
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          No entries found
          {batches && ` for batches: ${batches.join(', ')}`}
          {graduatesOnly && ' (graduates only)'}
        </p>
      </div>
    )
  }

  return (
    <div id="leaderboard" className="pt-24 mx-auto max-w-5xl px-6 min-h-screen">
      <h2 className="text-center text-4xl lg:text-6xl font-bold uppercase">
        Leaderboard
      </h2>
      <p className="mt-4 text-center text-lg font-medium sm:text-xl/8">
        Complete challenges to score points and climb the leaderboard!
      </p>
      {((batches?.length ?? 0) > 0 || graduatesOnly) && (
        <p className="mt-2 text-center text-md text-gray-600">
          {[
            batches?.length && `Showing batch${batches.length > 1 ? 'es' : ''} ${batches.sort((a, b) => a - b).join(', ')}`,
            graduatesOnly && ', graduates only'
          ]
            .filter(Boolean)
            .join(' • ')}
        </p>
      )}
      <div className="mt-10 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3 border-t-2 border-b-2 border-dashed text-left text-lg font-semibold"
                  >
                    <span className={tableCellStyles}>Rank</span>
                  </th>
                  <th
                    scope="col"
                    className="py-3 border-t-2 border-b-2 border-dashed text-left text-lg font-semibold"
                  >
                    <span className={tableCellStyles}>Player</span>
                  </th>
                  {showBatchColumn && (
                    <th
                      scope="col"
                      className="py-3 border-t-2 border-b-2 border-dashed text-left text-lg font-semibold"
                    >
                      <span className={tableCellStyles}>Batch</span>
                    </th>
                  )}
                  <th
                    scope="col"
                    className="py-3 border-t-2 border-b-2 border-dashed text-left text-lg font-semibold"
                  >
                    <span className={`${tableCellStyles} border-r-2`}>
                      Points
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="border-b-2 border-dashed">
                {filteredLeaderboard.map((leaderboardData, index) => {
                  const address = leaderboardData.address.toLowerCase()
                  const builderBatch = builderBatchMap.get(address)
                  const isGraduate = builderGraduateMap.get(address)
                  return (
                    <tr key={leaderboardData.address} className="">
                      <td className="py-2 whitespace-nowrap text-lg font-medium">
                        <span className={tableCellStyles}>
                          {index + 1}
                          {index === 0 && ' 🥇'}
                          {index === 1 && ' 🥈'}
                          {index === 2 && ' 🥉'}
                        </span>
                      </td>
                      <td className="py-2 whitespace-nowrap text-lg">
                        <span className={tableCellStyles}>
                          {leaderboardData.ens || leaderboardData.address}
                          {isGraduate && ' 🎓'}
                        </span>
                      </td>
                      {showBatchColumn && (
                        <td className="py-2 whitespace-nowrap text-lg">
                          <span className={tableCellStyles}>
                            {builderBatch !== undefined ? `Batch ${builderBatch}` : '-'}
                          </span>
                        </td>
                      )}
                      <td className="py-2 whitespace-nowrap text-lg">
                        <span className={`${tableCellStyles} border-r-2`}>
                          {leaderboardData.points}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
