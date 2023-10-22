import Image from 'next/image'
import Header from './Header'
import Workouts from './Workouts'
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Workouts />
    </main>
  )
}
