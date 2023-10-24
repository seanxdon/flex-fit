'use client'

import React from 'react'
import Header from '../Header'
import { useState, useEffect } from 'react'

export default function MyPlan() {

  const [workoutPlan, setWorkoutPlan] = useState<any>( typeof window !== "undefined" ? localStorage.getItem('workout-saved'): null );

  const onChangeWorkoutPlan = (e: any) => {
    setWorkoutPlan(e.target.value);
  }

  useEffect(() => {
    localStorage.setItem('workout-saved', workoutPlan);
  }, [workoutPlan]);

  return (
    <div>
      <Header />
      <div className="px-[9%] flex flex-col justify-center">
        <h1 className="py-16 uppercase font-sans tracking-tight text-5xl text-cyan-200	font-bold">My <br></br>Workout</h1>
        <textarea rows={10} className="p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your workout routine for the week:" value={workoutPlan} onChange={onChangeWorkoutPlan}></textarea>
        <button
              className="border-none bg-cyan-500 hover:bg-cyan-400 p-2 m-2 rounded-md w-60"
              type="submit"
            >
              Generate Workout
            </button>
      </div>
    </div>
  )
}
