import Image from "next/image";

export default function Hero({ fraunces }) {
  return (
    <section className={" max-lg:w-[375px] text-center -z-10"}>
      <Image
        src="/desktop/image-header.jpg"
        width={2880 / 2}
        height={1600 / 2}
        alt="reference"
        className="max-sm:hidden"
      />
      <Image
        src="/mobile/image-header.jpg"
        width={750 / 2}
        height={1076 / 2}
        alt="reference"
        className="sm:hidden"
      />
      <div className=" top-36 lg:top-52 lg:w-[1440px] absolute font-extrabold text-white  max-lg:text-4xl lg:text-6xl tracking-[0.2em]  ">
        <h1 className={fraunces.className}>WE ARE CREATIVES</h1>
        <Image
          src="/icon-arrow-down.svg"
          width={36}
          height={144}
          alt="arrow-down"
          className="mx-auto mt-16  lg:mt-24"
        />
      </div>
    </section>
  );
}
