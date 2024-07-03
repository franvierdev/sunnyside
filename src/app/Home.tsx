import Header from "./components/header";
import Hero from "./components/hero";
import Content from "./components/content";
import { fraunces, barlow } from "./page";

export default function Home() {
  return (
    <main className="container max-w-[1440px] mx-auto">
      <Header fraunces={fraunces} barlow={barlow} />
      <Hero fraunces={fraunces} barlow={barlow} />
      <Content fraunces={fraunces} barlow={barlow} />
    </main>
  );
}
