import { StaticsCard } from "./StaticsCard";
import { UserCard } from "./UserCard";
import data from "../assets/data.json";

import exerciseIcon from "../assets/images/icon-exercise.svg";
import playIcon from "../assets/images/icon-play.svg";
import selfcareIcon from "../assets/images/icon-self-care.svg";
import socialIcon from "../assets/images/icon-social.svg";
import studyIcon from "../assets/images/icon-study.svg";
import workIcon from "../assets/images/icon-work.svg";
import { useState } from "react";

const iconMap = {
  Play: playIcon,
  Exercise: exerciseIcon,
  "Self Care": selfcareIcon,
  Social: socialIcon,
  Study: studyIcon,
  Work: workIcon,
};

export function MainPage() {
  const [timeFrame, setTimeFrame] = useState("Daily");
  function handleDailyTimeFrame() {
    setTimeFrame("Daily");
  }
  function handleMonthlyTimeFrame() {
    setTimeFrame("Monthly");
  }
  function handleWeeklyTimeFrame() {
    setTimeFrame("Weekly");
  }
  return (
    <main className="w-full h-lvh flex flex-col items-center gap-y-8 mt-24">
      <UserCard
        currentTimeFrame={timeFrame}
        handleDaily={handleDailyTimeFrame}
        handleMonthly={handleMonthlyTimeFrame}
        handleWeekly={handleWeeklyTimeFrame}
      />
      {data.map((profile) => {
        if (timeFrame === "Daily") {
          return (
            <StaticsCard
              lastTime={"Day"}
              imgIcon={iconMap[profile.title]}
              title={profile.title}
              currentTime={profile.timeframes.daily.current}
              previousTime={profile.timeframes.daily.previous}
            />
          );
        }
        if (timeFrame === "Weekly") {
          return (
            <StaticsCard
              lastTime={"Week"}
              imgIcon={iconMap[profile.title]}
              title={profile.title}
              currentTime={profile.timeframes.weekly.current}
              previousTime={profile.timeframes.weekly.previous}
            />
          );
        }
        if (timeFrame === "Monthly") {
          return (
            <StaticsCard
              lastTime={"Monthly"}
              imgIcon={iconMap[profile.title]}
              title={profile.title}
              currentTime={profile.timeframes.monthly.current}
              previousTime={profile.timeframes.monthly.previous}
            />
          );
        }
      })}
    </main>
  );
}
