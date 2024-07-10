import Header from "./header";
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
    <main className="  max-lg:w-[375px]">
      <Hero fraunces={fraunces} />
      <section id="content" className="">
        <Content fraunces={fraunces} barlow={barlow} />
      </section>
      <section id="testimonials">
        <Testimonials fraunces={fraunces} barlow={barlow} />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="footer">
        <Footer fraunces={fraunces} barlow={barlow} />
      </section>
    </main>
  );
}
