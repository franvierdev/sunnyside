import Header from "./components/header";
import Hero from "./components/hero";
import Content from "./components/content";
import Testimonials from "./components/testimonials";
import { Barlow, Fraunces } from "next/font/google";
import Gallery from "./components/gallery";
import Footer from "./components/footer";

const barlow = Barlow({ weight: ["600"], subsets: ["latin"] });
const fraunces = Fraunces({
  weight: ["700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="  max-lg:w-[375px] lg:max-w-[1440px] mx-auto">
      <Header fraunces={fraunces} barlow={barlow} />
      <Hero fraunces={fraunces} />
      <Content fraunces={fraunces} barlow={barlow} />
      <Testimonials fraunces={fraunces} barlow={barlow} />
      <Gallery />
      <Footer fraunces={fraunces} barlow={barlow} />
    </main>
  );
}
