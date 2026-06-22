"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const [time, setTime] = useState("--:--:--");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // WebGL halftone shader
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    const webgl = gl as WebGLRenderingContext;

    const syncSize = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    const ro = new ResizeObserver(syncSize);
    ro.observe(canvas);
    syncSize();

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    float scale = 40.0;
    vec2 grid = fract(st * scale) - 0.5;

    vec2 motion = vec2(
        sin(u_time * 0.2 + st.y * 2.0),
        cos(u_time * 0.15 + st.x * 2.0)
    ) * 0.1;

    float dist = length(grid + motion);

    float strength = 0.3 + 0.2 * sin(u_time * 0.5 + st.x * 3.0);
    float mask = smoothstep(strength, strength - 0.1, dist);

    vec3 color = vec3(0.04);
    color += mask * vec3(0.1);

    float noise = random(st + u_time * 0.01) * 0.05;
    color += noise;

    gl_FragColor = vec4(color, 1.0);
}`;

    function createShader(
      glCtx: WebGLRenderingContext,
      type: number,
      src: string
    ) {
      const s = glCtx.createShader(type)!;
      glCtx.shaderSource(s, src);
      glCtx.compileShader(s);
      return s;
    }

    const prog = webgl.createProgram()!;
    webgl.attachShader(prog, createShader(webgl, webgl.VERTEX_SHADER, vs));
    webgl.attachShader(prog, createShader(webgl, webgl.FRAGMENT_SHADER, fs));
    webgl.linkProgram(prog);
    webgl.useProgram(prog);

    const buf = webgl.createBuffer();
    webgl.bindBuffer(webgl.ARRAY_BUFFER, buf);
    webgl.bufferData(
      webgl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      webgl.STATIC_DRAW
    );

    const pos = webgl.getAttribLocation(prog, "a_position");
    webgl.enableVertexAttribArray(pos);
    webgl.vertexAttribPointer(pos, 2, webgl.FLOAT, false, 0, 0);

    const uTime = webgl.getUniformLocation(prog, "u_time");
    const uRes = webgl.getUniformLocation(prog, "u_resolution");
    const uMouse = webgl.getUniformLocation(prog, "u_mouse");

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animId: number;
    function render(t: number) {
      syncSize();
      webgl.viewport(0, 0, canvas!.width, canvas!.height);
      if (uTime) webgl.uniform1f(uTime, t * 0.001);
      if (uRes) webgl.uniform2f(uRes, canvas!.width, canvas!.height);
      if (uMouse) webgl.uniform2f(uMouse, mouse.x, mouse.y);
      webgl.drawArrays(webgl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    }
    render(0);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      ro.disconnect();
    };
  }, []);

  const heroWords = [
    { text: "KARTHIKEYA.", color: "text-white", delay: 0 },
    { text: "APPASANI.", color: "text-white", delay: 0.1 },
    { text: "ENGINEER.", color: "text-neo-crimson", delay: 0.2, glitch: true },
  ];

  return (
    <section
      id="about"
      className="relative w-full h-screen flex flex-col justify-center px-4 md:px-12 overflow-hidden border-b border-neo-border"
    >
      {/* WebGL Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10 opacity-60"
        style={{ display: "block" }}
      />

      {/* Hero Typography */}
      <div className="relative z-10 flex flex-col gap-8 md:gap-12 mt-20 md:mt-0">
        {heroWords.map((word, i) => (
          <motion.h1
            key={word.text}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3 + word.delay,
              ease: [0.4, 0, 0.2, 1],
            }}
            className={`font-display-xl ${word.color} leading-none ${
              word.glitch ? "glitch-wrapper" : ""
            }`}
            data-text={word.glitch ? word.text : undefined}
            style={{ fontSize: "clamp(60px, 10vw, 140px)" }}
          >
            {word.text}
          </motion.h1>
        ))}
      </div>

      {/* Bottom Status Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-4 md:left-12 right-4 md:right-12 flex justify-between items-end z-10 font-label-sm text-text-warm"
      >
        <div className="flex flex-col gap-1">
          <span>STATUS: ONLINE</span>
          <span>SYS.TIME: {time}</span>
        </div>
        <a
          href="#stack"
          className="flex flex-col items-center gap-2 animate-bounce"
        >
          <span className="uppercase" style={{ writingMode: "vertical-rl" }}>
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 text-neo-crimson" />
        </a>
      </motion.div>
    </section>
  );
}
