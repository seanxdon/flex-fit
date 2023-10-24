'use client'

import { useChat } from 'ai/react'
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Header from '@/app/Header';
export default function WorkoutPlanGenerator({ params }: {
  params: {id: string}
}) {
  
  const [muscle, setMuscle] = useState("");
  const [exercises, setExercises] = useState("");

  const { messages , handleInputChange, handleSubmit } = 
  useChat({
    body: {
      workout: "",
      muscle: muscle,
      exercises: exercises,
    }
  })

  const onChangeMuscle = (e: any) => {
    setMuscle(e.target.value);
    handleInputChange(e)
  }

  const onChangeExercises = (e: any) => {
    setExercises(e.target.value);
    handleInputChange(e)
  }
  
  const onSubmit = (e: any) => {
    handleSubmit(e);
  };

  const lastMessage = messages[messages.length - 1];
  const generatedWorkout = lastMessage?.role === "assistant" ? lastMessage.content : null;

  return (
    <div>
      <main className="min-h-screen h-full bg-[url('./assets/workout-background.jpeg')]">
      <Header />
        <form className="my-10 flex flex-row max-[1050px]:flex-col justify-center text-center" onSubmit={onSubmit}>
          <div>
            <input
              className="rounded-md p-2 m-2 text-black w-80"
              type="text"
              onChange={onChangeMuscle}
              placeholder="Which muscle are your training?"
            />
            <input
              className="rounded-md p-2 m-2 text-black w-80"
              type="number"
              min={3}
              max={20}
              onChange={onChangeExercises}
              placeholder="# of exercises per workout"
            />
          </div>
          <div>
            <button
              className="border-none bg-cyan-500 hover:bg-cyan-400 p-2 m-2 rounded-md w-60"
              type="submit"
            >
              Generate Workout
            </button>
            <Link href={"/"}>
              <button
                className="border-none bg-cyan-500 hover:bg-cyan-400 p-2 m-2 rounded-md w-16"
                type="submit"
              >
                <FontAwesomeIcon icon={faHouse} />
              </button>
            </Link>
          </div>
        </form>
        <section className="w-full">
        {generatedWorkout && (
          <>
            <div className="space-y-2 px-5 w-full flex flex-col items-center justify-center max-w-xl mx-auto">
              {generatedWorkout
                .substring(generatedWorkout.indexOf('1'))
                .split("Exercise")
                .map((workouts) => {
                  return (
                    <div
                      className="bg-white text-black rounded-xl shadow-md p-4 hover:bg-gray-100 transition border"
                      key={workouts}
                    >
                      <p className="text-sm">{workouts}</p>
                    </div>
                  );
                })}
            </div>
          </>
          )}
        </section>
      </main>
    </div>
  )
}

