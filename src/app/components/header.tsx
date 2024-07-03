import Image from "next/image";

export default function Header({ barlow, fraunces }) {
  return (
    <header className="   relative z-10    ">
      <div className="fixed flex justify-between max-sm:py-8 ps-7 lg:p-10 lg:pt-12 max-lg:w-[375px] lg:w-[1440px] bg-[#3DBEFD]">
        <Image
          src="/logo.svg"
          width={220}
          height={44}
          alt="Picture of the author"
          className="max-lg:w-32"
        ></Image>
        <nav
          className={
            barlow.className +
            " flex gap-x-14 text-lg text-gray-200 self-center me-4 max-lg:hidden"
          }
        >
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a
            href="#"
            className={
              fraunces.className +
              " font-semibold text-gray-700 bg-white py-4 px-6 rounded-full -mt-4 hover:bg-white/40 hover:text-white  duration-300"
            }
          >
            {" "}
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
}
