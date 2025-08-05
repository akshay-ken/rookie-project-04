import { StaticsCard } from "./StaticsCard";
import { UserCard } from "./UserCard";
import data from "../assets/data.json";

import exerciseIcon from "../assets/images/icon-exercise.svg";
import playIcon from "../assets/images/icon-play.svg";
import selfcareIcon from "../assets/images/icon-self-care.svg";
import socialIcon from "../assets/images/icon-social.svg";
import studyIcon from "../assets/images/icon-study.svg";
import workIcon from "../assets/images/icon-work.svg";

const iconMap = {
  Play: playIcon,
  Exercise: exerciseIcon,
  "Self Care": selfcareIcon,
  Social: socialIcon,
  Study: studyIcon,
  Work: workIcon,
};

export function MainPage() {
  return (
    <main className="w-full h-lvh flex flex-col items-center gap-y-8 mt-24">
      <UserCard />
      {data.map((profile) => {
        return <StaticsCard />;
      })}
      <StaticsCard />
    </main>
  );
}
