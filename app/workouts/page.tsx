import Link from "next/link";

export default function WorkoutsList() {
  const workoutDetails = [
    {
      text: "Push Pull Legs",
      page: "/push-pull-legs",
      subtitle: "45-60 min",
      image: "https://images.unsplash.com/photo-1652363722833-509b3aac287b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altImg: "Push Pull Legs Workout Image",
    },
    {
      text: "Chest Back Legs",
      page: "/chest-back-legs",
      subtitle: "45-60 min",
      image:
        "https://plus.unsplash.com/premium_photo-1663134059475-5976ce4cc2d8?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altImg: "Chest Back Legs Workout Image",
    },
    {
      text: "Upper Lower Split",
      page: "/upper-lower-split",
      subtitle: "55-65 min",
      image:
        "https://images.unsplash.com/photo-1596357395217-80de13130e92?auto=format&fit=crop&q=80&w=2942&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altImg: "Upper Lower Workout Image",
    },
    {
      text: "Full Body Workout",
      page: "/full-body-split",
      subtitle: "40-60 min",
      image:
        "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&q=80&w=3028&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altImg: "Full Body Workout Image",
    },
  ];

  return (
    <div className="w-10/12 py-12 flex flex-col">
      <h1 className="my-5 uppercase font-sans tracking-tight text-5xl text-cyan-100	font-bold">Select <br></br>Workout</h1>
      {workoutDetails.map(({ text, page, subtitle, image, altImg}, index) => {
        return (
          <div key={index}>
            <Link href={{pathname: `/workouts/${page}`}}>
              <div className="rounded-xl relative my-5">
                <div className="absolute w-full h-full bg-black/70 rounded-xl text-white">
                  <p className="font-bold text-2xl px-2 pt-4">{text} </p>
                  <p className="px-2">{subtitle}</p>
                </div>
                <img
                  className="max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl"
                  src={image}
                  alt={altImg}
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
