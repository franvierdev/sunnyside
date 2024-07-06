import Image from "next/image";

export default function Content({ barlow, fraunces }: any) {
  return (
    <div className=" flex flex-col  lg:grid lg:grid-cols-2 ">
      <div className="lg:hidden">
        <Image
          src="/mobile/image-transform.jpg"
          width={750 / 2}
          height={624 / 2}
          alt="vohue"
          className=""
        />
      </div>
      <div className=" max-sm:w-[375px] flex flex-col gap-10 lg:gap-12 max-lg:py-16 lg:pt-44 px-6 lg:px-20 lg:ms-20 tracking-wider max-lg:text-center ">
        <h2
          className={
            fraunces.className +
            " font-extrabold text-3xl lg:text-4xl lg:pe-12 max-lg:tracking-tight text-gray-800 "
          }
        >
          Transform your brand
        </h2>
        <p className="text-[hsl(210,4%,67%)] max-lg:text-sm  ">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a
          href="#"
          className={
            fraunces.className +
            " font-extrabold max-lg:self-center under-yellow w-40"
          }
        >
          LEARN MORE
        </a>
      </div>
      <div className="">
        <Image
          src="/desktop/image-transform.jpg"
          width={720}
          height={600}
          alt="vohue"
          className="max-lg:hidden "
        />
      </div>
      <div>
        <Image
          src="/desktop/image-stand-out.jpg"
          width={720}
          height={600}
          alt="copa"
          className="max-lg:hidden "
        />
        <Image
          src="/mobile/image-stand-out.jpg"
          width={750 / 2}
          height={624 / 2}
          alt="copa"
          className="lg:hidden "
        />
      </div>
      <div className="max-sm:w-[375px] flex flex-col gap-10 lg:gap-12 max-lg:py-16 lg:pt-44 px-6 lg:px-20 lg:ms-20 tracking-wider max-lg:text-center  ">
        <h2
          className={
            fraunces.className +
            " font-extrabold max-lg:text-3xl lg:text-4xl max-lg:px-2 lg:pe-12 text-gray-800 max-lg:tracking-tight "
          }
        >
          Stand out to the right audience
        </h2>
        <p className="text-[hsl(210,4%,67%)] max-lg:text-sm max-lg:px-2">
          Using a collaborative formula of designers, researchers,
          photographers, videographers,and copywriters, we&apos;ll build and
          extend your brand in digital places.
        </p>
        <a
          href="#"
          className={
            fraunces.className +
            " max-lg:self-center under-red font-extrabold w-40"
          }
        >
          LEARN MORE
        </a>
      </div>

      <div className=" text-center">
        <Image
          src="/desktop/image-graphic-design.jpg"
          width={720}
          height={600}
          alt="cerezas"
          className="max-sm:hidden"
        />
        <Image
          src="/mobile/image-graphic-design.jpg"
          width={750 / 2}
          height={1200 / 2}
          alt="cerezas"
          className="sm:hidden"
        />
        <div className=" max-lg:pb-16 -mt-52 lg:px-48 gap-6 text-[hsl(167,40%,24%)] flex flex-col">
          <h3 className={fraunces.className + " text-3xl font-extrabold"}>
            Graphic Design
          </h3>
          <p className={barlow.className + " tracking-tight max-lg:px-4"}>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients&apos;
            attention.
          </p>
        </div>
      </div>
      <div className="text-center">
        <Image
          src="/desktop/image-photography.jpg"
          width={720}
          height={600}
          alt="naranja"
          className="max-sm:hidden"
        />
        <Image
          src="/mobile/image-photography.jpg"
          width={750 / 2}
          height={1200 / 2}
          alt="naranja"
          className="sm:hidden"
        />
        <div className=" -mt-52 lg:px-48 gap-6 text-[hsl(198,62%,26%)] flex flex-col">
          <h3 className={fraunces.className + " text-3xl font-extrabold"}>
            Photography
          </h3>
          <p className={barlow.className + " tracking-tight max-lg:px-4"}>
            Increase you credibility by getting the most stunning. high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
}
