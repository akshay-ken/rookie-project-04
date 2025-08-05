import { StaticsCard } from "./StaticsCard";
import { UserCard } from "./UserCard";

export function MainPage() {
  return (
    <main className="w-full h-lvh flex flex-col items-center gap-y-8 mt-24">
      <UserCard />
      <StaticsCard />
    </main>
  );
}
