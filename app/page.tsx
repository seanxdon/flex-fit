import Image from 'next/image'
import Header from './Header'
import Navigation from './Navigation'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-10 py-20">
      <Header />
      <Navigation />
    </main>
  )
}
