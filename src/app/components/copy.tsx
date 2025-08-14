'use client'

import { useState } from 'react'

function CopyIcon() {
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
      <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
      <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
      <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" />
    </svg>
  )
}

function CheckIcon() {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function Copy() {
  const [npxCommandCopied, setNpxCommandCopied] = useState(false)
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('npx eth-tech-tree@latest')
      setNpxCommandCopied(true)
      setTimeout(() => {
        setNpxCommandCopied(false)
      }, 800)
    } catch {
      // no-op
    }
  }
  return (
    <div>
      <button className="" onClick={handleCopy}>
        {npxCommandCopied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  )
}
