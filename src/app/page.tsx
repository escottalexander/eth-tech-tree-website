import Link from 'next/link'
import { Copy } from './components/copy'
import { Leaderboard } from './components/leaderboard'
import PlausibleProvider from 'next-plausible'

function GitIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function TrophyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

export default function Home() {
  return (
    <PlausibleProvider domain="ethtechtree.com">
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
                <div className="flex gap-4">
                  <Link href="#leaderboard">
                    <TrophyIcon />
                  </Link>
                  <Link href="https://github.com/BuidlGuidl/eth-tech-tree">
                    <GitIcon />
                  </Link>
                  <Copy />
                </div>
              </div>
              <div className="p-4 bg-slate-800 border-t border-gray-700 rounded-b-md">
                <pre className="text-lg">
                  <code>
                    npx <span className="text-green-400">eth-tech-tree</span>
                  </code>
                </pre>
              </div>
            </div>
            <div className="p-4 bg-slate-800 border-t border-gray-700 rounded-b-md">
              <pre className="text-lg">
                <code>
                  npx <span className="text-green-400">eth-tech-tree@latest</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
        <Leaderboard />
      </div>
    </PlausibleProvider>
  )
}
