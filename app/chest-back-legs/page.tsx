import { Metadata } from "next";
import Header from "../Header";
export const metadata: Metadata = {
  title: 'Chest Back Legs Workout',
  description: '',
}
export default async function ChestBackLegs() {

  return (
    <div>
      <Header />
      <h1>Chest Back Legs Workout</h1>
    </div>
  )
}