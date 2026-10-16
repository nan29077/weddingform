"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function FixedStoryBackground() {
  const [secondScene, setSecondScene] = useState(false);

  useEffect(() => {
    const transition = document.getElementById("story-transition");
    if (!transition) return;

    const update = () => {
      const reached = transition.getBoundingClientRect().top <= window.innerHeight * 0.55;
      setSecondScene((current) => (current === reached ? current : reached));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#d9d6cb]">
      <div className={`absolute inset-0 transition-opacity duration-1000 ${secondScene ? "opacity-0" : "opacity-100"}`}>
        <Image src="/images/wedding-background-1.webp" alt="" fill sizes="100vw" className="object-cover object-center" />
      </div>
      <div className={`absolute inset-0 transition-opacity duration-1000 ${secondScene ? "opacity-100" : "opacity-0"}`}>
        <Image src="/images/wedding-background-2.webp" alt="" fill sizes="100vw" className="object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-ink/15" />
    </div>
  );
}
