import Image from "next/image";

export default function Testimonials({ fraunces, barlow }: any) {
  return (
    <div className="container  mt-16 pt-40 pb-20 text-center">
      <h2
        className={
          fraunces.className +
          " " +
          "text-xl tracking-[0.25em] text-[hsl(210,4%,67%)] font-extrabold"
        }
      >
        CLIENT TESTIMONIALS
      </h2>
      <div className="flex mx-36 max-sm:flex-col ">
        <div className="flex flex-col items-center py-20 gap-14 ">
          <Image
            src="/image-emily.jpg"
            width={144 / 2}
            height={144 / 2}
            alt="profile-img"
            className="rounded-full"
          ></Image>
          <p className={barlow.className + " text-[hsl(213,9%,39%)] text-lg"}>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div>
            <p className={fraunces.className + " font-extrabold text-lg"}>
              Emily R.
            </p>
            <p
              className={barlow.className + "  text-[hsl(210,4%,67%)] text-sm"}
            >
              Marketing Director
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center py-20 gap-14 ">
          <Image
            src="/image-thomas.jpg"
            width={144 / 2}
            height={144 / 2}
            alt="profile-img"
            className="rounded-full"
          ></Image>
          <p
            className={
              barlow.className + " text-[hsl(213,9%,39%)] text-lg px-12"
            }
          >
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <div>
            <p className={fraunces.className + " font-extrabold text-lg"}>
              Thomas S.
            </p>
            <p
              className={barlow.className + "  text-[hsl(210,4%,67%)] text-sm"}
            >
              Chef Operating Officer
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center py-20 gap-14">
          <Image
            src="/image-jennie.jpg"
            width={144 / 2}
            height={144 / 2}
            alt="profile-img"
            className="rounded-full"
          ></Image>
          <p className={barlow.className + " text-[hsl(213,9%,39%)] text-lg "}>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div>
            <p className={fraunces.className + " font-extrabold text-lg"}>
              Jennie F.
            </p>
            <p
              className={barlow.className + " text-sm  text-[hsl(210,4%,67%)]"}
            >
              Business Owner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
