import clsx from "clsx";
import avtar from "../assets/images/image-jeremy.png";
export function UserCard({
  handleDaily,
  handleWeekly,
  handleMonthly,
  currentTimeFrame,
}) {
  return (
    <div className="w-sm bg-Navy-900 flex flex-col rounded-3xl md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-9 md:w-full md:h-full">
      <div className="basis-9/12 bg-Purple-600 p-6 rounded-3xl flex-row md:flex-col md:items-start md:justify-center md:gap-y-10 flex items-center gap-x-6">
        <img
          src={avtar}
          className="size-16 md:size-24 rounded-full ring-3 ring-white"
          alt=""
        />
        <div className="flex flex-col gap-y-2">
          <p className="font-normal text-base md:text-xl text-gray-300">
            Report for
          </p>
          <p className="font-light text-2xl md:text-6xl text-white">
            Jeremy Robson
          </p>
        </div>
      </div>
      <div className="basis-3/12">
        <div className="flex text-xl flex-row p-4 justify-around md:flex-col md:h-full md:items-start">
          <button
            className={
              currentTimeFrame === "Daily" ? "text-white" : "text-gray-400"
            }
            onClick={handleDaily}
          >
            Daily
          </button>
          <button
            className={
              currentTimeFrame === "Weekly" ? "text-white" : "text-gray-400"
            }
            onClick={handleWeekly}
          >
            Weekly
          </button>
          <button
            className={
              currentTimeFrame === "Monthly" ? "text-white" : "text-gray-400"
            }
            onClick={handleMonthly}
          >
            Monthly
          </button>
        </div>
      </div>
    </div>
  );
}
