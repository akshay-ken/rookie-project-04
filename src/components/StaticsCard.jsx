import dots from "../assets/images/icon-ellipsis.svg";
import clsx from "clsx";

export function StaticsCard({
  imgIcon,
  title,
  currentTime,
  previousTime,
  lastTime,
}) {
  const bgColorStyle = clsx({
    "bg-Orange-work": title === "Work",
    "bg-Pink-study": title === "Study",
    "bg-Purple-social": title === "Social",
    "bg-Blue-play": title === "Play",
    "bg-Green-exercise": title === "Exercise",
    "bg-Yellow-selfcare": title === "Self Care",
  });

  return (
    <section className="w-sm flex flex-col bg-Navy-900 rounded-2xl">
      <div className={`basis-1/3 rounded-t-2xl ${bgColorStyle}`}>
        <img src={imgIcon} className="float-right" alt="" />
      </div>
      <div className="basis-2/3 bg-Navy-900 -mt-6 rounded-2xl p-6">
        <div className="flex flex-row items-center justify-between ">
          <p className="text-xl text-white">{title}</p>

          <img src={dots} className="w-7 h-2" alt="" />
        </div>
        <div className="flex flex-row mt-2 items-center justify-between">
          <p className="font-thin text-3xl text-white">{currentTime}hrs</p>
          <p className="text-lg text-Navy-200">
            Last {lastTime} - {previousTime}hrs
          </p>
        </div>
      </div>
    </section>
  );
}
