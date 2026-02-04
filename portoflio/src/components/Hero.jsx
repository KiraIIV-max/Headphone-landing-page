import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import headphonesImg from "../assets/Headphones.jpeg";
import heroHeadphoneImg from "../assets/headphone.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const texta = useRef(null);
  const imga = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      gsap.from(texta.current, {
        opacity: 0,
        y: 200,
        duration: 1.8,
        delay: 1,
        ease: "power2.out",
      });
    }, texta);

    const ctx2 = gsap.context(() => {
      gsap.from(imga.current, {
        opacity: 0,
        x: 200,
        duration: 1.4,
        delay: 0.5,
        ease: "power2.out",
      });
    }, imga);

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
      },
    });

    tl.to("#overlay", {
      opacity: 0,
      duration: 1.8,
      delay: 0.3,
      ease: "power2.out",
    }).set("#overlay", { display: "none" });

    return () => {
      ctx.revert();
      ctx2.revert();
      tl.kill();
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section>
      <div
        id="overlay"
        className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-3xl z-50"
      ></div>
      <header>
        <div className="flex flex-col lg:flex-row relative min-h-screen lg:min-h-auto">
          {/* LEFT CARD */}
          <div
            ref={texta}
            className="texta mt-6 md:mt-16 lg:mt-30 mx-4 md:mx-6 lg:ml-10 bg-zinc-900 border-2 border-zinc-700 p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl z-20 flex flex-col gap-4 md:gap-6 max-w-full md:max-w-xl lg:max-w-3xl shadow-2xl backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <div className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif whitespace-nowrap">
                headphone
              </div>

              <span className="hidden sm:block mx-2 md:mx-5 w-0.5 h-16 md:h-20 bg-zinc-100"></span>

              <div className="text-sky-400 flex flex-col uppercase font-sans font-semibold items-center">
                <div className="leading-3 md:leading-4 text-xl md:text-3xl">
                  gr
                </div>
                <div className="text-3xl md:text-5xl">2</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <div>
                <img
                  className="w-24 md:w-[120px] rounded-2xl md:rounded-3xl"
                  src={headphonesImg}
                  alt="Headphones"
                />
              </div>

              <div className="p-0 md:p-4">
                <div className="max-w-full md:max-w-[400px] text-sm md:text-base">
                  Premium audio experience with customizable settings and
                  superior sound quality for the ultimate listening
                  journey.{" "}
                </div>

                <div className="flex flex-wrap gap-2 mt-3 md:mt-4 items-center">
                  <button className="text-zinc-100 cursor-pointer uppercase flex items-center gap-1 md:gap-2 py-1 md:py-1.5 bg-sky-500 px-2 md:px-4 rounded-full text-xs md:text-sm hover:bg-sky-600 transition">
                    shop
                  </button>

                  <button className="text-zinc-100 cursor-pointer uppercase flex items-center gap-1 md:gap-2 py-1 md:py-1.5 bg-sky-500 px-2 md:px-4 rounded-full text-xs md:text-sm hover:bg-sky-600 transition">
                    new collection
                  </button>

                  <span className="bg-zinc-100 text-zinc-950 px-2 py-1 rounded-full text-xs md:text-base">
                    <FontAwesomeIcon icon={faArrowTrendUp} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            ref={imga}
            className="w-full mt-6 md:mt-10 lg:mt-0 lg:absolute lg:top-10 h-64 sm:h-96 md:h-[500px] lg:h-[600px] z-10 lg:w-full"
          >
            <div className="w-full h-full [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(60%_0,100%_0,100%_100%,0_100%)]">
              <img
                src={heroHeadphoneImg}
                alt="Headphone"
                className="rounded-lg md:rounded-xl lg:rounded-r-xl w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-0 top-0 w-full md:w-2/3 lg:w-1/3 h-full bg-gradient-to-r from-gray-900/80 to-transparent"></div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Hero;
