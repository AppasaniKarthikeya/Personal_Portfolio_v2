"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window) return;

    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Hover detection for interactive elements
    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll(
        "a, button, input, [data-hoverable], .neo-card"
      );
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    // Run initially and observe DOM changes
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // RAF loop for smooth cursor movement
    let animId: number;
    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      // Trail follows with lerp
      if (trailRef.current) {
        trailPos.current.x += (pos.current.x - trailPos.current.x) * 0.15;
        trailPos.current.y += (pos.current.y - trailPos.current.y) * 0.15;
        trailRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-[width,height,background-color] duration-200"
        style={{
          width: isHovering ? "40px" : "20px",
          height: isHovering ? "40px" : "20px",
          border: "2px solid #E63946",
          borderRadius: "50%",
          backgroundColor: isHovering
            ? "rgba(230, 57, 70, 0.2)"
            : "transparent",
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* Trailing ring */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: isHovering ? "60px" : "36px",
          height: isHovering ? "60px" : "36px",
          border: "1px solid rgba(230, 57, 70, 0.3)",
          borderRadius: "50%",
          opacity: isVisible ? 0.5 : 0,
          transition: "width 0.3s, height 0.3s, opacity 0.3s",
        }}
      />
      {/* Hide default cursor */}
      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
