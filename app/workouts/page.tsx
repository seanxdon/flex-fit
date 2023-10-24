import Link from "next/link";
export default function WorkoutsList() {
  const workoutDetails = [
    {
      title: "Push Pull Legs",
      page: "/push-pull-legs",
      subtitle: "45-60 min",
      image: "https://images.unsplash.com/photo-1652363722833-509b3aac287b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Push Pull Legs Workout Image",
    },
    {
      title: "Chest Back Arms Legs",
      page: "/chest-back-arms-legs",
      subtitle: "45-60 min",
      image:
        "https://plus.unsplash.com/premium_photo-1663134059475-5976ce4cc2d8?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Chest Back Legs Workout Image",
    },
    {
      title: "Upper Lower Split",
      page: "/upper-lower-split",
      subtitle: "55-65 min",
      image:
        "https://images.unsplash.com/photo-1596357395217-80de13130e92?auto=format&fit=crop&q=80&w=2942&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Upper Lower Workout Image",
    },
    {
      title: "Full Body Workout",
      page: "/full-body-split",
      subtitle: "40-60 min",
      image:
        "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&q=80&w=3028&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Full Body Workout Image",
    },
  ];

  return (
    <div className="w-10/12 pb-16 flex flex-col">
      <h1 className="py-16 uppercase font-sans tracking-tight text-5xl text-cyan-200	font-bold">Select <br></br>Workout</h1>
      {workoutDetails.map(({ title, page, subtitle, image, alt}, index) => {
        return (
          <div key={index}>
            <Link href={{pathname: `/workouts/${page}`}}>
              <div className="rounded-xl relative my-5 transition ease-in-out lg:hover:scale-110 duration-300">
                <div className="absolute w-full h-full rounded-xl text-white lg:hover:text-cyan-200 bg-black/70 lg:hover:bg-black/80">
                  <p className="font-bold text-2xl px-2 pt-4">{title} </p>
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
