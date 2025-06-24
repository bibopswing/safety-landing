"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

 
gsap.registerPlugin(ScrollTrigger);

export default function FadeIn({
  children,
  y = 20,
  delay = 0,
  start ,
  end = "top top",
  duration = 0.8,
  className = "",
  onClick,
}) {
  const el = useRef();

  const path = usePathname();
  const StartSettings = 
    start
      ? start
      : path.length<=3
      ? "top 80%"
      : "top bottom";


     

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        { opacity: 0, y },  
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el.current,
            start:StartSettings,
            // markers:true,
            end,
            toggleActions: "play none none none",  
           },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [y, delay, duration, StartSettings, end]);

  return (
    <div ref={el} onClick={onClick} className={className}>
      {children}
    </div>
  );
}
