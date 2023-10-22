import Image from 'next/image'
import Header from './Header'
import Navigation from './Navigation'
import Workouts from './Workouts'
export default function Home() {
  return (
    <main className="flex flex-col items-center px-10 py-20">
      <Header />
      <Workouts />
    </main>
  )
}
