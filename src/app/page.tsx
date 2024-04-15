import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Publications from "./components/Publications";



export default function Home() {
  return (
    <main className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" >
      <Hero/>
      <Overview/>
      <Experiences/>
      <Publications/>
    </main>
  );
}
