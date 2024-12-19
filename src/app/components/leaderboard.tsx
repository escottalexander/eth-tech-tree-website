type LeaderboardData = {
  address: string
  ens: string
  challengesCompleted: number
  points: number
  totalGasUsed: number
  rank: number
}

type Data = {
  leaderboard: LeaderboardData[]
}

const tableCellStyles = 'px-6 block border-l-2 border-gray-200 leading-tight'

export async function Leaderboard() {
  const response = await fetch(
    'https://ethdevtechtree.buidlguidl.com/leaderboard'
  )
  const data: Data | null = await response.json()

  if (!response.ok || !data || data.leaderboard.length === 0) {
    return null
  }

  return (
    <div id="leaderboard" className="pt-24 mx-auto max-w-5xl px-6 min-h-screen">
      <h2 className="text-center text-4xl lg:text-6xl font-bold uppercase">
        Leaderboard
      </h2>
      <p className="mt-4 text-center text-lg font-medium sm:text-xl/8">
        Complete challenges to score points and climb the leaderboard!
      </p>
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
                {data.leaderboard.map((leaderboardData) => (
                  <tr key={leaderboardData.address} className="">
                    <td className="py-2 whitespace-nowrap text-lg font-medium">
                      <span className={tableCellStyles}>
                        {leaderboardData.rank}
                        {leaderboardData.rank === 1 && ' 🥇'}
                        {leaderboardData.rank === 2 && ' 🥈'}
                        {leaderboardData.rank === 3 && ' 🥉'}
                      </span>
                    </td>
                    <td className="py-2 whitespace-nowrap text-lg">
                      <span className={tableCellStyles}>
                        {leaderboardData.ens}
                      </span>
                    </td>
                    <td className="py-2 whitespace-nowrap text-lg">
                      <span className={`${tableCellStyles} border-r-2`}>
                        {leaderboardData.points}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
