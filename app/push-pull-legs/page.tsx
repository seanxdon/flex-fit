'use client'
 
import { useChat } from 'ai/react'
import { useState } from 'react';
import Link from 'next/link';
import Header from '../Header';
 
export default function PushPullLegs() {
  const [days, setDays] = useState("");
  const [exercises, setExercises] = useState("");

  const { messages , handleInputChange, handleSubmit } = 
  useChat({
    body: {
      workout: "Push Pull Legs",
      days: days,
      exercises: exercises,
    }
  })

  const onChangeDays = (e: any) => {
    setDays(e.target.value);
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
    <>
    <div className="bg-repeat	 bg-black/70 bg-[url('https://images.unsplash.com/photo-1652363722833-509b3aac287b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
    <Header />
      <main className="mx-auto w-full h-screen flex flex-col p-2">
        <form className="my-10 flex flex-row" onSubmit={onSubmit}>
          <input
            className="rounded-md p-2 m-2 text-black w-1/3"
            type="number"
            min={3}
            max={7}
            onChange={onChangeDays}
            placeholder="# of workouts per week"
          />
          <input
            className="rounded-md p-2 m-2 text-black w-1/3"
            type="number"
            min={4}
            max={20}
            onChange={onChangeExercises}
            placeholder="# of exercises per workout"
          />
          <button
            className="border-none bg-cyan-500 hover:bg-cyan-400 p-2 m-2 rounded-md "
            type="submit"
          >
            Generate Workout
          </button>
          <Link href={"/"}>
          <button
            className="border-none bg-cyan-500 hover:bg-cyan-400 p-2 m-2 rounded-md"
            type="submit"
          >
            Home
          </button>
          </Link>
        </form>
        <section className="mb-auto">
        {generatedWorkout && (
          <>
            <div className="space-y-2 w-full flex flex-col items-center justify-center max-w-xl mx-auto">
              {generatedWorkout
                .substring(generatedWorkout.indexOf('Monday') + 0)
                .split(/[\r]?\n[\r]?\n/g)
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
    </>
  )
}