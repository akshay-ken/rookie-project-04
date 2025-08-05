import dots from "../assets/images/icon-ellipsis.svg";
import workBag from "../assets/images/icon-work.svg";
export function StaticsCard() {
  return (
    <section className="w-sm flex flex-col bg-Navy-900 rounded-2xl">
      <div className="bg-Orange-work basis-1/3 rounded-t-2xl">
        <img src={workBag} className=" float-right" alt="" />
      </div>
      <div className="basis-2/3 bg-Navy-900 -mt-6 rounded-2xl p-6">
        <div className="flex flex-row items-center justify-between ">
          <p className="text-xl text-white">Work</p>

          <img src={dots} className="w-7 h-2" alt="" />
        </div>
        <div className="flex flex-row mt-2 items-center justify-between">
          <p className="font-thin text-3xl text-white">32hrs</p>
          <p className="text-lg text-Navy-200">last week</p>
        </div>
      </div>
    </section>
  );
}
