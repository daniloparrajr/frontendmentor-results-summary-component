import ReactionIcon from "./assets/images/icon-reaction.svg";
import MemoryIcon from "./assets/images/icon-memory.svg";
import VerbalIcon from "./assets/images/icon-verbal.svg";
import VisualIcon from "./assets/images/icon-visual.svg";

export default function Home() {
  return (
      <section className="bg-white rounded-4xl grid grid-cols-2 w-full max-w-2.5xl">
          <div className="rounded-4xl bg-gradient-to-b from-neon-blue to-han-purple text-white pt-10 px-13 pb-14 text-center">
              <h2 className="text-light-blue text-2xl font-bold mb-8.5">Your Result</h2>
              <p className="w-[200px] h-[200px] mx-auto flex flex-col justify-center items-center rounded-full text-light-blue/50 bg-gradient-to-b from-purple-heart mb-7 font-bold gap-y-1"><span className="text-7xl text-white block font-extrabold">76</span> of 100</p>

              <p className="text-3xl font-bold mb-3.5">Great</p>
              <p className="text-light-blue">Your performance exceed 65% of the people conducting the test here!</p>
          </div>

          <div className="rounded-4xl p-10 pb-14">
              <h2 className="text-2xl font-bold mb-7">Summary</h2>

              <dl className="flex flex-col gap-4 mb-10">
                  <div className="bg-red/5 p-4 flex items-center justify-between rounded-xl">
                      <dt className="text-red flex items-center gap-3"><ReactionIcon/> Reaction</dt>
                      <dd className="text-dark-navy font-bold">80 <span className="opacity-50">/ 100</span></dd>
                  </div>
                  <div className="bg-yellow/5 p-4 flex items-center justify-between rounded-xl">
                      <dt className="text-yellow flex items-center gap-3"><MemoryIcon/> Memory</dt>
                      <dd className="text-dark-navy font-bold">92 <span className="opacity-50">/ 100</span></dd>
                  </div>
                  <div className="bg-green/5 p-4 flex items-center justify-between rounded-xl">
                      <dt className="text-green flex items-center gap-3"><VerbalIcon/> Verbal</dt>
                      <dd className="text-dark-navy font-bold">61 <span className="opacity-50">/ 100</span></dd>
                  </div>
                  <div className="bg-blue/5 p-4 flex items-center justify-between rounded-xl">
                      <dt className="text-blue flex items-center gap-3"><VisualIcon/> Visual</dt>
                      <dd className="text-dark-navy font-bold">72 <span className="opacity-50">/ 100</span></dd>
                  </div>
              </dl>

              <button className="w-full bg-dark-navy text-white rounded-full font-bold p-4 hover:bg-gradient-to-b hover:from-neon-blue hover:to-han-purple">Continue</button>
          </div>
      </section>
  );
}
