import clsx from "clsx";
import avtar from "../assets/images/image-jeremy.png";
export function UserCard({
  handleDaily,
  handleWeekly,
  handleMonthly,
  currentTimeFrame,
}) {
  return (
    <div className="w-sm bg-Navy-900 flex flex-col rounded-3xl">
      <div className="basis-9/12 bg-Purple-600 p-6 rounded-3xl flex-row flex items-center gap-x-6">
        <img
          src={avtar}
          className="size-16 rounded-full ring-3 ring-white"
          alt=""
        />
        <div className="flex flex-col">
          <p className="font-normal text-base text-gray-300">Report for</p>
          <p className="font-light text-2xl text-white">Jeremy Robson</p>
        </div>
      </div>
      <div className="basis-3/12">
        <div className="flex text-xl flex-row p-4 justify-around">
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
