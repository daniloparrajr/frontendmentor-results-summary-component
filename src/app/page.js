import Image from "next/image";

export default function Home() {
  return (
      <section className="bg-white rounded-4xl">
          <div className="rounded-4xl bg-gradient-to-r from-neon-blue to-han-purple text-white p-9 pb-14 text-center">
              <h2 className="text-light-blue text-2xl">Your Result</h2>
              <p><span className="text-7xl">76</span> of 100</p>

              <p className="text-3xl">Great</p>
              <p className="text-lg">You scored higher than 65% of the people who have taken these tests.</p>
          </div>

          <div className="rounded-4xl">
              <h2>Summary</h2>

              <dl>
                  <dt>Reaction</dt>
                  <dd>80 / 100</dd>
                  <dt>Memory</dt>
                  <dd>92 / 100</dd>
                  <dt>Verbal</dt>
                  <dd>61 / 100</dd>
                  <dt>Visual</dt>
                  <dd>72 / 100</dd>
              </dl>

              <button>Continue</button>
          </div>
      </section>
  );
}
