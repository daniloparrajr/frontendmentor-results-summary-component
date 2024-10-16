import SummaryItem from "@/app/components/SummaryItem";
import Button from "@/app/components/Button";

import ReactionIcon from "@/app/assets/images/icon-reaction.svg";
import MemoryIcon from "@/app/assets/images/icon-memory.svg";
import VerbalIcon from "@/app/assets/images/icon-verbal.svg";
import VisualIcon from "@/app/assets/images/icon-visual.svg";


export default function ResultsSummary() {
    return (
        <section className="bg-white sm:rounded-t-4xl rounded-b-4xl sm:grid sm:grid-cols-2 w-full max-w-2.5xl">
            <div
                className="sm:rounded-t-4xl rounded-b-4xl bg-gradient-to-b from-neon-blue to-han-purple text-white pt-6 pb-10 px-13 sm:pt-10 sm:pb-14 text-center">
                <h2 className="text-light-blue text-lg sm:text-2xl font-bold sm:mb-8.5 mb-6">Your Result</h2>
                <p className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] mx-auto flex flex-col justify-center items-center rounded-full text-light-blue/50 bg-gradient-to-b from-purple-heart mb-6 sm:mb-7 font-bold gap-y-1">
                    <span className="text-5.5xl block sm:text-7xl text-white font-extrabold leading-none">76</span>
                    of 100
                </p>
                <p className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3.5">Great</p>
                <p className="text-light-blue">Your performance exceed 65% of the people conducting the test here!</p>
            </div>

            <div className="rounded-4xl pt-6 p-8 sm:p-10 sm:pb-14">
                <h2 className="text-2xl font-bold mb-7">Summary</h2>

                <dl className="flex flex-col gap-4 mb-10">
                    <SummaryItem label="Reaction" score="80" icon={<ReactionIcon/>}/>
                    <SummaryItem label="Memory" score="90" theme="warning" icon={<MemoryIcon/>}/>
                    <SummaryItem label="Verbal" score="61" theme="success" icon={<VerbalIcon/>}/>
                    <SummaryItem label="Visual" score="73" theme="info" icon={<VisualIcon/>}/>
                </dl>

                <Button>Continue</Button>
            </div>
        </section>
    );
}