import WorkoutsList from "./workouts/page";
import Header from "./Header";
import ExercisesList from "./exercises/page";
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <WorkoutsList />
      <ExercisesList />
    </main>
  )
}
