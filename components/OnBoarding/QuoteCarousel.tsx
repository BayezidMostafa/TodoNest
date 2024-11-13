"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const quotes = [
  "An organized to-do list is the first step towards a clear mind.",
  "Prioritize, plan, and achieve — one task at a time!",
  "A to-do list is a map to guide you through the day's journey.",
  "Every ticked-off task brings you closer to your goals.",
  "Small steps, big results — start with your to-do list.",
  "The secret to productivity is a well-organized to-do list.",
  "Today’s tasks, tomorrow’s success.",
  "A clear plan makes for a clear mind.",
  "Organize your day, organize your life.",
  "Stay on track with a well-organized to-do list.",
  "Conquer the day by managing your to-dos effectively.",
  "A productive day starts with an organized list.",
  "Turn dreams into plans, and plans into action.",
  "Each task done is a step closer to success.",
  "Break it down, organize, and conquer!",
  "Your future self will thank you for today's organization.",
  "Don’t prioritize your schedule, schedule your priorities.",
  "Tasks may be many, but progress is a single step at a time.",
  "The journey to success is paved with completed tasks.",
  "Your to-do list is the bridge between dreams and reality.",
];

const QuoteCarousel: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const quoteRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<number[]>([]); // Reference to store timeout IDs

  useEffect(() => {
    const typeQuote = (text: string) => {
      // Clear any existing timeouts to prevent overlapping animations
      timeoutsRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
      timeoutsRef.current = []; // Reset timeouts array

      setDisplayText(""); // Reset display text

      // Loop through each character in the text
      text.split("").forEach((char, i) => {
        const timeoutId = window.setTimeout(() => {
          setDisplayText((prev) => prev + char);
        }, i * 50); // Typing speed for each character
        timeoutsRef.current.push(timeoutId); // Store timeout ID
      });
    };

    const transitionQuote = () => {
      // Fade-out animation for the current quote
      gsap.to(quoteRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          // Update to the next quote
          const nextIndex = (quoteIndex + 1) % quotes.length;
          setQuoteIndex(nextIndex);
          typeQuote(quotes[nextIndex]); // Type out the next quote

          // Fade-in animation for the new quote
          gsap.fromTo(
            quoteRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
          );
        },
      });
    };

    // Initial typewriting effect for the first quote
    typeQuote(quotes[quoteIndex]);

    // Transition to the next quote every 7 seconds
    const interval = setInterval(transitionQuote, 7000);

    return () => {
      clearInterval(interval);
      timeoutsRef.current.forEach((timeoutId) => clearTimeout(timeoutId)); // Clear timeouts on unmount
    };
  }, [quoteIndex]);

  return (
    <div
      ref={quoteRef}
      className="text-xl sm:text-2xl md:text-3xl font-medium transition-all duration-500 ease-out text-center"
    >
      <span className="text-4xl font-serif">&laquo;</span>
      {displayText}
      <span className="text-4xl font-serif">&raquo;</span>
    </div>
  );
};

export default QuoteCarousel;
