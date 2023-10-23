import WorkoutsList from "./workouts/page";
import Header from "./Header";
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <WorkoutsList />
    </main>
  )
}
