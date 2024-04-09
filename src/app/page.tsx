import Hero from "./components/Hero";
import Introduction from "./components/Introduction";



export default function Home() {
  return (
    <main className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" >
      <Hero/>
      <Introduction/>
    </main>
  );
}
