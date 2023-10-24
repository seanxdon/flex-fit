import React from 'react'
import Link from 'next/link';

export default function ExercisesList() {
  const workoutDetails = [
    {
      title: "Discover New Exercises",
      page: "/find-exercises",
      subtitle: "Add these to your routine",
      image: "https://images.unsplash.com/photo-1593234270323-0414ec1574e1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Find new exercises image",
    }
  ];

  return (
    <div className="w-10/12 pb-16 flex flex-col">
      <h1 className="py-16 uppercase font-sans tracking-tight text-5xl text-cyan-200	font-bold">New<br></br>Exercises</h1>
      {workoutDetails.map(({ title, page, subtitle, image, alt}, index) => {
        return (
          <div key={index}>
            <Link href={{pathname: `/exercises/${page}`}}>
              <div className="rounded-xl relative my-5 transition ease-in-out lg:hover:scale-110 duration-300">
                <div className="absolute w-full h-full rounded-xl text-white lg:hover:text-cyan-200 bg-black/70 lg:hover:bg-black/80">
                  <p className="font-bold text-2xl px-2 pt-4">{title}</p>
                  <p className="px-2">{subtitle}</p>
                </div>
                <img
                  className="max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl"
                  src={image}
                  alt={alt}
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
