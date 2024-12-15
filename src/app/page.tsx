import CTAButton from "./CTAButton";
import Footer from "./Footer";
import Fading from "./Fading";
import Hero from "./Hero";
import Offer from "./Offer";
import Project from "./Project";

export default function Home() {
  return (
    <main className="relative h-[100vh]">

      <div className="fixed top-0 left-0 w-full h-screen z-10">
        <Hero />
      </div>

      <div className="relative z-10">
        <div className="mt-[100vh]">
          <Offer />
          <div className="h-[200px] bg-background"/>
          <Project />
          <Footer />
        </div>
      </div>

      <CTAButton />
      <Fading />
    </main>
  );
}
