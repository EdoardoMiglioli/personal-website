import CTAButton from "./CTAButton";
import Footer from "./Footer";
import Fading from "./Fading";
import Hero from "./Hero";
import Offer from "./Offer";
import Project from "./Project";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Offer />
      <Project />
      <Footer />
      <CTAButton />
      <Fading />
    </main>
  );
}
