"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motionPresets, PROJECTS_DATA } from "@/lib/utils";
import { Box, BarChart3, Zap, Activity } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   MINDROUTE X — Sticky-scroll split with isometric 3D mockups
   ═══════════════════════════════════════════════════════════════ */
function MindRouteProject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const mockupY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const mockupRotate = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -3]);
  const cardFloat = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const project = PROJECTS_DATA[0];

  return (
    <div ref={containerRef} className="relative">
      {/* Sticky container */}
      <div className="md:sticky md:top-20">
        <motion.div
          {...motionPresets.fadeInUp}
          className="grid grid-cols-1 md:grid-cols-5 gap-0 min-h-[70vh] manga-panel"
        >
          {/* Left: Text Content (40%) */}
          <div className="md:col-span-2 p-6 md:p-10 flex flex-col justify-center bg-neo-surface border-b md:border-b-0 md:border-r border-neo-border relative overflow-hidden">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="font-label-sm text-neo-crimson mb-4 inline-block border border-neo-crimson px-2 py-1 w-fit"
            >
              Case_{project.caseNumber}
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="font-display-xl text-white leading-none tracking-tighter mb-4"
              style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="font-body-lg text-[#e4bebc] mb-6 max-w-md"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {project.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  className="font-label-sm text-text-warm border border-neo-border px-2 py-1 text-[10px] hover:border-neo-crimson hover:text-neo-crimson transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              <a 
                href="https://civic-issue-tracker-puce.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-label-sm px-6 py-3 bg-neo-crimson text-black border border-transparent hover:bg-transparent hover:border-neo-crimson hover:text-neo-crimson transition-colors inline-block text-center"
              >
                View Project
              </a>
              <a 
                href="https://github.com/AppasaniKarthikeya/civic-issue-tracker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-label-sm px-6 py-3 bg-transparent border border-text-primary text-white hover:bg-white hover:text-black transition-colors inline-block text-center"
              >
                Source Code
              </a>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-neo-border opacity-20 rotate-45" />
          </div>

          {/* Right: Isometric 3D Mockups (60%) */}
          <div className="md:col-span-3 bg-neo-bg relative overflow-hidden flex items-center justify-center p-6 md:p-12 min-h-[450px]">
            {/* Crosshatch pattern background */}
            <div className="absolute inset-0 opacity-10 crosshatch-bg" />

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "linear-gradient(#2A2A2A 1px, transparent 1px), linear-gradient(90deg, #2A2A2A 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Floating mockup cluster */}
            <motion.div
              style={{ y: mockupY, rotate: mockupRotate }}
              className="relative z-10 flex items-center justify-center"
            >
              {/* Primary phone mockup */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-44 h-72 md:w-52 md:h-80 border-2 border-neo-crimson bg-neo-bg/90 backdrop-blur-sm relative shadow-[0_0_40px_rgba(230,57,70,0.1)]"
                style={{ transform: "perspective(1000px) rotateY(-12deg) rotateX(5deg)" }}
              >
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-neo-crimson/10 border-b border-neo-crimson/50 flex items-center justify-between px-2">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-neo-crimson" />
                    <div className="w-1.5 h-1.5 bg-text-warm/50" />
                  </div>
                  <span className="font-label-sm text-[6px] text-text-warm">CIVICTRACK</span>
                </div>

                {/* App content mockup */}
                <div className="p-3 mt-6 space-y-2">
                  <div className="h-1.5 bg-neo-border w-3/4 rounded-none" />
                  <div className="h-1.5 bg-neo-border/60 w-1/2 rounded-none" />

                  {/* Roadmap CTA */}
                  <div className="h-8 bg-neo-crimson/15 border border-neo-crimson/40 mt-3 flex items-center justify-center">
                    <span className="font-label-sm text-neo-crimson text-[7px]">REPORT ISSUE</span>
                  </div>

                  {/* Career path cards */}
                  <div className="grid grid-cols-2 gap-1 mt-2">
                    {["POTHOLE", "GARBAGE", "WATER", "LIGHTING"].map((path) => (
                      <div key={path} className="h-10 bg-neo-surface border border-neo-border flex items-center justify-center">
                        <span className="font-label-sm text-text-warm text-[6px]">{path}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between">
                      <span className="font-label-sm text-[5px] text-text-warm">RESOLVED</span>
                      <span className="font-label-sm text-[5px] text-neo-crimson">85%</span>
                    </div>
                    <div className="h-1.5 bg-neo-surface border border-neo-border">
                      <div className="h-full bg-neo-crimson w-[85%]" />
                    </div>
                  </div>

                  {/* Neural nodes */}
                  <div className="mt-2 flex justify-center gap-3 py-2">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                      className="w-2 h-2 bg-neo-crimson/60"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      className="w-2 h-2 bg-neo-teal/60"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      className="w-2 h-2 bg-text-warm/60"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Secondary floating card — AI analysis module */}
              <motion.div
                style={{ y: cardFloat }}
                animate={{ y: [0, 8, 0], x: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-20 md:-right-28 w-32 h-24 border border-neo-teal/30 bg-neo-bg/95 backdrop-blur-sm p-2.5"
              >
                <div className="font-label-sm text-neo-teal text-[7px] mb-1.5 flex items-center gap-1">
                  <Activity className="w-2.5 h-2.5" />
                  LOCATION_TRACKING
                </div>
                <div className="flex items-end gap-1 h-10">
                  {[30, 50, 20, 70, 45, 60, 35].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="w-full bg-neo-teal/30"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Tertiary floating card — metrics */}
              <motion.div
                animate={{ y: [0, -6, 0], x: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-8 -left-12 md:-left-20 w-28 h-16 border border-neo-crimson/20 bg-neo-bg/95 backdrop-blur-sm p-2"
              >
                <div className="font-label-sm text-neo-crimson text-[6px] mb-1">GPS_SYNC</div>
                <div className="flex items-center gap-1">
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 bg-neo-crimson"
                  />
                  <span className="font-label-sm text-text-warm text-[6px]">ACTIVE</span>
                </div>
                <div className="font-label-sm text-white text-[8px] mt-1">98.7% ACC</div>
              </motion.div>
            </motion.div>

            {/* Slowly rotating AR icon */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-6 right-6 opacity-[0.06]"
            >
              <Box className="w-28 h-28 text-neo-crimson" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PHYSICS ENGINE — Dashboard centerpiece with sticky-scroll
   ═══════════════════════════════════════════════════════════════ */
function PhysicsEngineProject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const project = PROJECTS_DATA[1];

  const barHeights = [20, 40, 35, 60, 85, 75, 50, 30, 45, 55, 65, 42];

  return (
    <div ref={containerRef} className="relative">
      <div className="md:sticky md:top-20">
        <motion.div
          {...motionPresets.fadeInUp}
          className="neo-card w-full p-6 md:p-10 flex flex-col gap-6"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-neo-border pb-4 gap-4">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="font-label-sm text-neo-teal mb-2 inline-block"
              >
                Case_{project.caseNumber}
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="font-headline-lg text-white leading-none tracking-tighter"
              >
                {project.title}
              </motion.h3>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-2 font-label-sm text-text-warm"
            >
              <span className="border border-neo-border px-2 py-1 bg-neo-bg flex items-center gap-1">
                <Zap className="w-3 h-3" />
                {project.version}
              </span>
              <span className="border border-neo-border px-2 py-1 bg-neo-bg text-neo-crimson flex items-center gap-1">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-neo-crimson"
                />
                {project.status}
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body-lg text-[#e4bebc] max-w-2xl"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4 mb-2"
          >
            <a 
              href="https://path-app-weld.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-label-sm px-6 py-3 bg-neo-crimson text-black border border-transparent hover:bg-transparent hover:border-neo-crimson hover:text-neo-crimson transition-colors inline-block text-center"
            >
              View Project
            </a>
            <a 
              href="https://github.com/AppasaniKarthikeya/Path-app.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-label-sm px-6 py-3 bg-transparent border border-text-primary text-white hover:bg-white hover:text-black transition-colors inline-block text-center"
            >
              Source Code
            </a>
          </motion.div>

          {/* ── Dashboard Visualization ── */}
          <div className="bg-neo-bg border border-neo-border relative overflow-hidden">
            {/* Top control bar */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-neo-border">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-4 h-4 text-text-warm" />
                <span className="font-label-sm text-text-warm">
                  Messages vs Time
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-label-sm text-[10px] text-text-warm border border-neo-border px-1.5 py-0.5 bg-neo-surface">
                  session_start
                </span>
                <span className="font-label-sm text-[10px] text-text-warm border border-neo-border px-1.5 py-0.5 bg-neo-surface">
                  active
                </span>
                <span className="font-label-sm text-[10px] text-neo-crimson border border-neo-crimson/30 px-1.5 py-0.5 bg-neo-crimson/5">
                  LIVE
                </span>
              </div>
            </div>

            {/* Main graph area */}
            <div className="h-72 md:h-80 w-full relative flex flex-col justify-end p-4">
              {/* Y-axis labels */}
              <div className="absolute top-4 left-4 bottom-4 flex flex-col justify-between">
                {["100", "75", "50", "25", "0"].map((label) => (
                  <span key={label} className="font-label-sm text-[9px] text-text-warm/60">
                    {label} msg/s
                  </span>
                ))}
              </div>

              {/* Graph Bars */}
              <div className="flex items-end justify-between w-full h-[85%] gap-1.5 md:gap-2 opacity-90 ml-8 md:ml-12">
                {barHeights.map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.08 * i,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className={`w-full border transition-all duration-300 relative group ${
                      i === 4
                        ? "bg-neo-crimson border-neo-crimson"
                        : "bg-neo-surface border-neo-border hover:bg-neo-crimson hover:border-neo-crimson"
                    }`}
                  >
                    {i === 4 && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                        className="absolute -top-7 left-1/2 transform -translate-x-1/2 font-label-sm text-white text-[9px] whitespace-nowrap bg-neo-crimson px-1.5 py-0.5"
                      >
                        PEAK
                      </motion.div>
                    )}
                    {/* Hover tooltip */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-sm text-[8px] text-white bg-neo-surface border border-neo-border px-1 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {height} msg/s
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Grid lines overlay */}
              <div className="absolute inset-0 grid-lines-bg pointer-events-none opacity-30" />

              {/* Horizontal reference line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="absolute top-[30%] left-0 h-[1px] border-t border-dashed border-neo-crimson/30"
              />
            </div>

            {/* Bottom metrics bar */}
            <div className="flex flex-wrap gap-4 md:gap-6 px-4 py-3 border-t border-neo-border bg-neo-surface/50">
              {[
                { label: "MAX TOKENS", value: "1,240 /s", color: "text-neo-crimson" },
                { label: "AVG LATENCY", value: "480 ms", color: "text-white" },
                { label: "TOTAL CHATS", value: "3,612", color: "text-neo-teal" },
                { label: "USERS", value: "4,250", color: "text-white" },
              ].map((metric) => (
                <div key={metric.label} className="flex flex-col gap-0.5">
                  <span className="font-label-sm text-[9px] text-text-warm">
                    {metric.label}
                  </span>
                  <span className={`font-label-sm text-[11px] ${metric.color}`}>
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
                className="font-label-sm text-text-warm border border-neo-border px-2 py-1 text-[10px] hover:border-neo-crimson hover:text-neo-crimson transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   AGRIAID PROJECT — Computer Vision / CNN Scanner
   ═══════════════════════════════════════════════════════════════ */
function AgriAidProject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const project = PROJECTS_DATA[2];

  return (
    <div ref={containerRef} className="relative mt-8 md:mt-24">
      <div className="md:sticky md:top-20">
        <motion.div
          {...motionPresets.fadeInUp}
          className="grid grid-cols-1 md:grid-cols-5 gap-0 min-h-[70vh] manga-panel"
        >
          {/* Left: Text Content (40%) */}
          <div className="md:col-span-2 p-6 md:p-10 flex flex-col justify-center bg-neo-surface border-b md:border-b-0 md:border-r border-neo-border relative overflow-hidden">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="font-label-sm text-neo-teal mb-4 inline-block border border-neo-teal px-2 py-1 w-fit"
            >
              Case_{project.caseNumber}
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="font-display-xl text-white leading-none tracking-tighter mb-4"
              style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="font-body-lg text-[#e4bebc] mb-6 max-w-md"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {project.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  className="font-label-sm text-text-warm border border-neo-border px-2 py-1 text-[10px] hover:border-neo-teal hover:text-neo-teal transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              <a 
                href={project.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="font-label-sm px-6 py-3 bg-neo-teal text-black border border-transparent hover:bg-transparent hover:border-neo-teal hover:text-neo-teal transition-colors inline-block text-center"
              >
                View Project
              </a>
              <a 
                href={project.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="font-label-sm px-6 py-3 bg-transparent border border-text-primary text-white hover:bg-white hover:text-black transition-colors inline-block text-center"
              >
                Source Code
              </a>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-neo-teal/20 opacity-20 rotate-45" />
          </div>

          {/* Right: Scanning Visualization (60%) */}
          <div className="md:col-span-3 bg-neo-bg relative overflow-hidden flex items-center justify-center p-6 md:p-12 min-h-[450px]">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-10 dot-grid-bg" />

            {/* Central Viewport */}
            <div className="w-64 h-64 md:w-80 md:h-80 border border-neo-teal/30 bg-neo-surface relative overflow-hidden shadow-[0_0_50px_rgba(140,244,232,0.05)]">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neo-teal" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neo-teal" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neo-teal" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neo-teal" />

              {/* Mock leaf silhouette (using CSS) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-32 h-48 bg-neo-teal rounded-full" style={{ borderRadius: "100% 0% 100% 0%" }} />
              </div>

              {/* Scanning line */}
              <motion.div
                animate={{ y: [0, 320, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 right-0 h-1 bg-neo-teal shadow-[0_0_15px_#8cf4e8]"
              />

              {/* CNN Data Overlays */}
              <div className="absolute top-4 left-4 flex flex-col gap-1">
                <span className="font-label-sm text-[8px] text-neo-teal bg-neo-bg px-1 border border-neo-teal/30">MODEL: CNN_RESNET50</span>
                <span className="font-label-sm text-[8px] text-text-warm bg-neo-bg px-1 border border-neo-border">CONFIDENCE: 96.2%</span>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-1">
                <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-2 h-2 bg-neo-teal" />
                <span className="font-label-sm text-[8px] text-neo-teal">ANALYZING</span>
              </div>
            </div>
            
            {/* Database / Cloud connection nodes */}
            <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
               {["AWS_S3", "POSTGRESQL", "FASTAPI"].map((label, i) => (
                 <motion.div 
                   key={label} 
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.5 + i * 0.2 }}
                   viewport={{ once: true }}
                   className="border border-neo-border bg-neo-surface px-2 py-1 flex items-center gap-2"
                 >
                   <motion.div 
                     animate={{ opacity: [0.3, 1, 0.3] }} 
                     transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                     className="w-1.5 h-1.5 bg-neo-crimson" 
                   />
                   <span className="font-label-sm text-[7px] text-text-warm">{label}</span>
                 </motion.div>
               ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROJECTS SECTION — Container
   ═══════════════════════════════════════════════════════════════ */
export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="w-full min-h-screen px-4 md:px-12 py-16 flex flex-col gap-12 border-t border-neo-border"
    >
      {/* Section Header */}
      <motion.div
        {...motionPresets.fadeInUp}
        className="flex items-center gap-4"
      >
        <h2 className="font-headline-lg text-white tracking-tighter">
          Projects
        </h2>
        <div className="h-[1px] bg-neo-border flex-grow" />
        <span className="font-label-sm text-text-warm border border-neo-border px-2 py-1">
          CASE_STUDIES
        </span>
      </motion.div>

      {/* MindRoute X */}
      <MindRouteProject />

      {/* Physics Engine */}
      <PhysicsEngineProject />

      {/* AgriAid Project */}
      <AgriAidProject />
    </section>
  );
}
