
import React from 'react'
import Link from 'next/link'

export default function Workouts() {
  return (
    <div>
      <Link href="/push-pull-legs">
        <div>Push Pull Legs</div>
      </Link>
      <Link href="/chest-back-legs">
        <div>Chest Back Legs</div>
      </Link>
      <Link href="/upper-lower-split">
        <div>Upper Lower Split</div>
      </Link>
      <Link href="/full-body-split">
        <div>Full Body Split</div>
      </Link>
    </div>
  )
}
