"use client";
import { Fraunces } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header({ barlow, fraunces }: any) {
  let [open, setOpen] = useState(false);

  const ct = () => {
    setOpen(false);
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    open === false ? setOpen(true) : setOpen(false);
  };

  return (
    <header className="   relative z-10    ">
      <div className="fixed flex justify-between max-lg:py-8  lg:p-10 lg:pt-12 max-lg:w-[375px] lg:w-[1440px] bg-[#3DBEFD]">
        <Image
          src="/logo.svg"
          width={220}
          height={44}
          alt="Picture of the author"
          className="max-lg:w-1/2 ps-6"
        ></Image>

        <button onClick={handleSubmit} className="lg:hidden pe-6">
          {open === false ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="h-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="h-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>

        <nav
          className={
            open === false
              ? barlow.className +
                ` flex gap-x-14 text-lg text-gray-200 self-center me-4 max-lg:hidden`
              : barlow.className +
                ` flex flex-col absolute top-28 gap-8 p-8 text-center bg-white w-[85%] ms-[7.5%] text-[hsl(213,9%,39%)] text-lg lg:hidden  `
          }
        >
          <Link href="#footer" onClick={ct}>
            About
          </Link>
          <Link href="#content" onClick={ct}>
            Services
          </Link>
          <Link href="#gallery" onClick={ct}>
            Projects
          </Link>
          <a
            href="#"
            className={
              fraunces.className +
              " font-semibold text-gray-700 max-lg:bg-[hsl(51,100%,49%)] lg:bg-white py-4 max-lg:mx-auto px-6 rounded-full lg:-mt-4 hover:bg-white/40 hover:text-white  duration-300"
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
