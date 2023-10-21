import Image from 'next/image'
import Header from './Header'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-10 py-20">
      <Header />
    </main>
  )
}
