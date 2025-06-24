"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * @param {ReactNode} children – елемент для анімації
 * @param {object} options – індивідуальні параметри анімації
 */
export default function AnimatedBlock({
  children,
  className,
  triggerOffset = "top bottom",
  animation = { y: 20, opacity: 0 },
  duration = 0.9,
  delay = 0,
  ease = "power2.out",
}) {
  const el = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(el.current, animation, {
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: el.current,
          start: triggerOffset,
          toggleActions: "play none none reverse",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [animation, duration, delay, triggerOffset, ease]);

  return (
    <div className={`flex ${className}`} ref={el}>
      {children}
    </div>
  );
}
