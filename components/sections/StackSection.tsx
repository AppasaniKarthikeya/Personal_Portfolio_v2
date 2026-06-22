"use client";

import { motion } from "framer-motion";
import { Terminal, Cloud, Brain, Film } from "lucide-react";
import { motionPresets } from "@/lib/utils";
import { useEffect, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   TERMINAL MOCKUP — Typing animation for Core Engineering card
   ═══════════════════════════════════════════════════════════════ */
function TerminalMockup() {
  const lines = [
    { text: "> initializing core systems...", color: "text-neo-teal", delay: 0 },
    { text: "> loading dependencies...", color: "text-neo-teal", delay: 600 },
    { text: "> compiling Java bytecode... OK", color: "text-neo-teal", delay: 1200 },
    { text: "> warn: deep learning module detected", color: "text-neo-crimson", delay: 1800 },
    { text: "> compiling algorithms... OK", color: "text-neo-teal", delay: 2400 },
    { text: "> building production bundle...", color: "text-neo-teal", delay: 3000 },
    { text: "> system ready.", color: "text-white", delay: 3600 },
  ];

  const [visibleLines, setVisibleLines] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((line, i) => {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => Math.max(prev, i + 1));
      }, line.delay);
      timers.push(timer);
    });
    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <motion.div
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true }}
      className="flex-grow bg-neo-bg border border-neo-border relative z-10 overflow-hidden flex flex-col"
    >
      {/* Terminal header bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-neo-border bg-neo-surface/50">
        <div className="w-2 h-2 bg-neo-crimson" />
        <div className="w-2 h-2 bg-text-warm/40" />
        <div className="w-2 h-2 bg-text-warm/20" />
        <span className="font-label-sm text-text-warm text-[9px] ml-2">bash — core_system</span>
      </div>

      {/* Terminal body */}
      <div className="p-4 font-label-sm flex flex-col gap-1.5 flex-grow">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={
              i < visibleLines
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -10 }
            }
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={line.color}
          >
            {line.text}
          </motion.p>
        ))}
        {visibleLines < lines.length && (
          <span className="terminal-cursor text-neo-teal">_</span>
        )}
        {visibleLines >= lines.length && (
          <span className="terminal-cursor text-neo-crimson">█</span>
        )}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NODE GRAPH — Animated SVG for AI & Logic card
   ═══════════════════════════════════════════════════════════════ */
function NodeGraph() {
  return (
    <div className="flex-grow flex items-center justify-center relative min-h-[200px]">
      {/* Primary nodes */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-3.5 h-3.5 bg-neo-crimson"
        style={{ top: "22%", left: "22%" }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute w-3.5 h-3.5 bg-neo-teal"
        style={{ top: "68%", left: "30%" }}
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-3.5 h-3.5 bg-text-warm"
        style={{ top: "45%", right: "22%" }}
      />

      {/* Secondary nodes */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute w-2 h-2 bg-neo-crimson/50"
        style={{ top: "33%", right: "38%" }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute w-2 h-2 bg-neo-teal/40"
        style={{ top: "58%", left: "55%" }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute w-1.5 h-1.5 bg-white/20"
        style={{ top: "80%", right: "40%" }}
      />

      {/* Connection lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {/* Primary triangle */}
        <motion.line
          x1="25" y1="25" x2="33" y2="71"
          stroke="#E63946" strokeWidth="0.6" opacity={0.4}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.line
          x1="33" y1="71" x2="76" y2="48"
          stroke="#8cf4e8" strokeWidth="0.6" opacity={0.4}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.line
          x1="76" y1="48" x2="25" y2="25"
          stroke="#ab8987" strokeWidth="0.6" opacity={0.4}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        {/* Secondary connections */}
        <line x1="25" y1="25" x2="60" y2="35" stroke="#E63946" strokeWidth="0.3" strokeDasharray="2 2" opacity={0.25} />
        <line x1="33" y1="71" x2="57" y2="60" stroke="#8cf4e8" strokeWidth="0.3" strokeDasharray="2 2" opacity={0.25} />
        <line x1="76" y1="48" x2="58" y2="82" stroke="#ab8987" strokeWidth="0.3" strokeDasharray="2 2" opacity={0.2} />
      </svg>

      {/* Center label */}
      <span className="font-label-sm text-text-warm z-10 bg-neo-surface px-2 py-1 border border-neo-border text-[10px]">
        Neural.Net
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TIMELINE SNIPPET — DaVinci Resolve for Creative card
   ═══════════════════════════════════════════════════════════════ */
function TimelineSnippet() {
  return (
    <div className="mt-4 flex flex-col gap-2">
      {/* Timecodes */}
      <div className="flex justify-between font-label-sm text-text-warm mb-1 text-[10px]">
        <span>0ms</span>
        <span className="text-neo-crimson">▶ 42ms</span>
        <span>120ms</span>
      </div>

      {/* Multi-track timeline */}
      <div className="space-y-1">
        {/* Video track */}
        <div className="w-full h-5 bg-neo-bg border border-neo-border relative flex">
          <div className="w-[20%] h-full bg-[#372625]/80 border-r border-neo-border" />
          <div className="w-[35%] h-full bg-[#81262a]/80 border-r border-neo-border" />
          <div className="w-[25%] h-full bg-[#372625]/60 border-r border-neo-border" />
          <div className="w-[20%] h-full bg-[#81262a]/60" />
          {/* Playhead */}
          <motion.div
            animate={{ left: ["30%", "70%", "30%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-3px] bottom-[-3px] w-0.5 bg-neo-crimson z-10"
          />
        </div>

        {/* Audio track */}
        <div className="w-full h-3 bg-neo-bg border border-neo-border relative flex">
          <div className="w-[40%] h-full bg-neo-teal/15 border-r border-neo-border" />
          <div className="w-[60%] h-full bg-neo-teal/10" />
        </div>
      </div>

      {/* Track labels */}
      <div className="flex justify-between font-label-sm text-[8px] text-text-warm/60 mt-1">
        <span>MAIN — THREAD</span>
        <span>NET — FETCH</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PULSING STATUS INDICATOR — AWS Cloud card
   ═══════════════════════════════════════════════════════════════ */
function PulsingStatus() {
  return (
    <div className="flex items-center gap-2 mt-3">
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-3 h-3 bg-neo-crimson/30"
        />
        <div className="w-2 h-2 bg-neo-crimson relative z-10" />
      </div>
      <span className="font-label-sm text-neo-crimson text-[10px]">ACTIVE — US-EAST-1</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STACK SECTION — Bento Grid Container
   ═══════════════════════════════════════════════════════════════ */
export default function StackSection() {
  return (
    <section
      id="stack"
      className="w-full min-h-screen px-4 md:px-12 py-16 flex flex-col gap-8"
    >
      {/* Section Header */}
      <motion.div
        {...motionPresets.fadeInUp}
        className="flex items-center gap-4"
      >
        <h2 className="font-headline-lg text-white tracking-tighter">
          Tech Stack
        </h2>
        <div className="h-[1px] bg-neo-border flex-grow" />
        <span className="font-label-sm text-text-warm border border-neo-border px-2 py-1">
          SYS.V.2.0
        </span>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        {...motionPresets.staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:grid-rows-3"
      >
        {/* ── Card A: Core Engineering (2×2) — Terminal Mockup ── */}
        <motion.div
          {...motionPresets.staggerChild}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 10px 30px rgba(230, 57, 70, 0.15)",
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="neo-card col-span-1 md:col-span-2 md:row-span-2 p-6 flex flex-col relative overflow-hidden group"
        >
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <h3 className="font-headline-md text-white">Core Engineering</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Java", "Python", "JavaScript", "C", "Data Structures & Algorithms", "Object-Oriented Programming"].map(tag => (
                  <span key={tag} className="font-label-sm text-text-warm border border-neo-border px-1.5 py-0.5 text-[9px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Terminal className="w-5 h-5 text-text-warm group-hover:text-neo-crimson transition-colors" />
          </div>
          <TerminalMockup />
          {/* Dot grid background */}
          <div className="absolute inset-0 dot-grid-bg pointer-events-none" />
        </motion.div>

        {/* ── Card B: Cloud / AWS (1×1) — Pulsing Status ── */}
        <motion.div
          {...motionPresets.staggerChild}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 10px 30px rgba(230, 57, 70, 0.15)",
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="neo-card col-span-1 row-span-1 p-6 flex flex-col justify-between group"
        >
          <div className="flex flex-col">
            <div className="flex justify-between items-start">
              <h3 className="font-headline-md text-white">Cloud & Tools</h3>
              <Cloud className="w-5 h-5 text-text-warm group-hover:text-neo-crimson transition-colors" />
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {["AWS", "Firebase", "Git", "GitHub"].map(tag => (
                <span key={tag} className="font-label-sm text-text-warm border border-neo-border px-1.5 py-0.5 text-[9px]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-12 h-12 bg-neo-bg border border-neo-border flex items-center justify-center text-text-warm group-hover:border-neo-crimson transition-colors">
              <span className="font-headline-md text-sm">AWS</span>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between mb-1">
                <span className="font-label-sm text-[9px] text-text-warm">PROFICIENCY</span>
                <span className="font-label-sm text-[9px] text-neo-crimson">80%</span>
              </div>
              <div className="h-2 bg-neo-bg border border-neo-border overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
                  className="h-full bg-neo-crimson"
                />
              </div>
            </div>
          </div>
          <PulsingStatus />
        </motion.div>

        {/* ── Card C: AI & Logic (1×2) — Node Graph ── */}
        <motion.div
          {...motionPresets.staggerChild}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 10px 30px rgba(230, 57, 70, 0.15)",
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="neo-card col-span-1 md:row-span-2 p-6 flex flex-col group"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-headline-md text-white">Data & AI</h3>
            <Brain className="w-5 h-5 text-text-warm group-hover:text-neo-crimson transition-colors" />
          </div>
          <NodeGraph />
          <div className="flex flex-wrap gap-2 mt-4">
            {["MySQL", "PostgreSQL", "Firebase Firestore", "SQL", "DBMS", "PyTorch", "FastAPI"].map(tag => (
              <span key={tag} className="font-label-sm text-text-warm border border-neo-border px-2 py-1 text-[9px] hover:border-neo-teal hover:text-neo-teal transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Card D: Creative / DaVinci Resolve (2×1) — Timeline ── */}
        <motion.div
          {...motionPresets.staggerChild}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 10px 30px rgba(230, 57, 70, 0.15)",
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="neo-card col-span-1 md:col-span-2 row-span-1 p-6 flex flex-col justify-between group"
        >
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <h3 className="font-headline-md text-white">Web Dev</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {["HTML", "CSS", "Next.js", "Tailwind CSS", "React"].map(tag => (
                  <span key={tag} className="font-label-sm text-text-warm border border-neo-border px-1.5 py-0.5 text-[9px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Terminal className="w-5 h-5 text-text-warm group-hover:text-neo-crimson transition-colors" />
          </div>
          <TimelineSnippet />
        </motion.div>
      </motion.div>
    </section>
  );
}
