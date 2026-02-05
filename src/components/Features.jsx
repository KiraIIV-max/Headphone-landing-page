import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  faWaveSquare,
  faBolt,
  faBattery,
  faShield,
  faHeadphones,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const features = [
    {
      icon: faWaveSquare,
      title: "Spatial Audio",
      description:
        "Immersive 360° sound with dynamic head tracking for a theater-like experience.",
    },
    {
      icon: faBolt,
      title: "Lightning Fast",
      description:
        "Instant pairing and seamless switching between all your devices.",
    },
    {
      icon: faBattery,
      title: "40-Hour Battery",
      description:
        "All-day listening with quick charge technology. 5 minutes = 3 hours.",
    },
    {
      icon: faShield,
      title: "Active Noise Cancelling",
      description:
        "Advanced ANC blocks up to 99% of ambient noise for pure focus.",
    },
    {
      icon: faHeadphones,
      title: "Premium Comfort",
      description:
        "Memory foam earcups and adjustable headband for hours of comfort.",
    },
    {
      icon: faStar,
      title: "Studio Quality",
      description: "Hi-Res certified audio with custom 40mm titanium drivers.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        opacity: 0,
        y: 100,
        duration: 2,
        delay: 0.3,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="feature-card mt-60 py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 "
    >
      <div  className="feature-card text-center mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
          Engineered for Excellence
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          Every detail meticulously crafted to deliver an unparalleled audio
          experience
        </p>
      </div>

      <div className=" feature-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 group cursor-pointer"
          >
            <div className="bg-sky-500/20 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-sky-500/30 transition-colors">
              <FontAwesomeIcon
                icon={feature.icon}
                className="text-sky-400 text-lg md:text-xl"
              />
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
