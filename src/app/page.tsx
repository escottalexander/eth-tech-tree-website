import { Copy } from './components/copy'

export default function Home() {
  return (
    <div className="font-sourceCodePro">
      <div className="bg-screen min-h-screen px-6">
        <div className="relative mx-auto max-w-2xl py-32 sm:py-36">
          <div className="text-center">
            <div className="flex justify-center items-center relative font-sourceCodePro text-balance text-5xl font-bold tracking-tight sm:text-7xl">
              <div aria-hidden="true" className="glitch-before">
                ETH TECH TREE
              </div>
              <h1 className="glitch-text">ETH TECH TREE</h1>
              <div aria-hidden="true" className="glitch-after">
                ETH TECH TREE
              </div>
            </div>
            <p className="mt-4 text-pretty text-lg font-medium sm:text-xl/8">
              Advanced Solidity coding challenges to test your Ethereum
              development skills.
            </p>
          </div>
          <div className="mt-12 border border-gray-700 rounded-md">
            <div className="px-4 py-3 flex items-center justify-between text-white">
              <div className="font-semibold">&gt;_ Terminal</div>
              <Copy />
            </div>
            <div className="p-4 bg-slate-800 border-t border-gray-700 rounded-b-md">
              <pre className="text-lg">
                <code>
                  npx <span className="text-green-400">eth-tech-tree</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
