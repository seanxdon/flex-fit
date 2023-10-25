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
        <textarea className="h-[55vh] p-2.5 text-white bg-gray-700 rounded-lg border border-white focus:ring-cyan-200 focus:border-cyan-200" placeholder="Your workout routine for the week:" value={workoutPlan} onChange={onChangeWorkoutPlan}></textarea>
      </div>
    </div>
  )
}
