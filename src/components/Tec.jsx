import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tec = () => {
  const sectionRef = useRef(null);
  const specs = [
    {
      label: "DRIVER SIZE",
      value: "40mm Titanium",
    },
    {
      label: "FREQUENCY RESPONSE",
      value: "20Hz - 40kHz",
    },
    {
      label: "IMPEDANCE",
      value: "32 Ohms",
    },
    {
      label: "BLUETOOTH",
      value: "5.3 with aptX",
    },
    {
      label: "BATTERY LIFE",
      value: "40 hours ANC on",
    },
    {
      label: "CHARGING",
      value: "USB-C Fast Charge",
    },
    {
      label: "WEIGHT",
      value: "250g",
    },
    {
      label: "CODECS",
      value: "AAC, aptX, LDAC",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 ">
      {/* HEADER */}
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
          Technical Specifications
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          Precision engineering meets audiophile standards
        </p>
      </div>

      {/* SPECS CONTAINER */}
      <div className="max-w-6xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-10 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {specs.map((spec, index) => (
            <div key={index} className="border-l-2 border-sky-500 pl-4 md:pl-6">
              <p className="text-xs md:text-sm text-gray-400 font-semibold tracking-widest mb-2 md:mb-3">
                {spec.label}
              </p>
              <p className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tec;
