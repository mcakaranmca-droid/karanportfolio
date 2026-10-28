"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Activity, ShieldCheck, Zap } from "lucide-react";

interface NovisOrbProps {
  interactive?: boolean;
  onOrbClick?: () => void;
  statusText?: string;
}

export const NovisOrb: React.FC<NovisOrbProps> = ({
  interactive = true,
  onOrbClick,
  statusText = "NOVIS INTELLIGENCE CORE",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [clickPulse, setClickPulse] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 340);
    let height = (canvas.height = 340);
    const centerX = width / 2;
    const centerY = height / 2;

    // Particle nodes for neural cloud
    const particleCount = 42;
    const particles = Array.from({ length: particleCount }, (_, i) => {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 60 + Math.random() * 65;
      return {
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        baseAngle: angle,
        baseRadius: radius,
        speed: 0.006 + Math.random() * 0.012,
        size: 1.5 + Math.random() * 2,
        color: i % 3 === 0 ? "#38bdf8" : i % 3 === 1 ? "#a855f7" : "#06b6d4",
      };
    });

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Central core glow
      const pulseMultiplier = isHovered ? 1.25 : 1.0;
      const corePulse = Math.sin(time * 2) * 5 * pulseMultiplier;
      const coreRadius = 45 + corePulse;

      const radialGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        10,
        centerX,
        centerY,
        coreRadius + 30
      );
      radialGrad.addColorStop(0, "rgba(56, 189, 248, 0.9)");
      radialGrad.addColorStop(0.35, "rgba(147, 51, 234, 0.7)");
      radialGrad.addColorStop(0.7, "rgba(6, 182, 212, 0.2)");
      radialGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius + 25, 0, Math.PI * 2);
      ctx.fillStyle = radialGrad;
      ctx.fill();

      // Outer Energy Rings
      ctx.save();
      ctx.translate(centerX, centerY);

      // Ring 1 - Cyan Fast Spin
      ctx.rotate(time * 0.4);
      ctx.beginPath();
      ctx.ellipse(0, 0, 95 * pulseMultiplier, 60 * pulseMultiplier, Math.PI / 4, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(56, 189, 248, 0.45)";
      ctx.lineWidth = 1.8;
      ctx.setLineDash([8, 12]);
      ctx.stroke();

      // Ring 2 - Purple Reverse Spin
      ctx.rotate(-time * 0.7);
      ctx.beginPath();
      ctx.ellipse(0, 0, 110 * pulseMultiplier, 70 * pulseMultiplier, -Math.PI / 3, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(168, 85, 247, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([12, 16]);
      ctx.stroke();

      // Ring 3 - Violet Orbit
      ctx.rotate(time * 0.25);
      ctx.beginPath();
      ctx.ellipse(0, 0, 125 * pulseMultiplier, 85 * pulseMultiplier, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(139, 92, 246, 0.25)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 8]);
      ctx.stroke();

      ctx.restore();

      // Neural Nodes & Connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.baseAngle += p.speed * (isHovered ? 1.8 : 1.0);
        const dynamicRadius =
          p.baseRadius + Math.sin(time * 3 + i) * (isHovered ? 12 : 6);
        p.x = centerX + Math.cos(p.baseAngle) * dynamicRadius;
        p.y = centerY + Math.sin(p.baseAngle) * dynamicRadius;

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 48) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(147, 197, 253, ${0.25 * (1 - dist / 48)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Dynamic Audio Waveform on Hover/Active
      const waveBars = 24;
      const waveWidth = 140;
      const startX = centerX - waveWidth / 2;
      for (let k = 0; k < waveBars; k++) {
        const barX = startX + (k / (waveBars - 1)) * waveWidth;
        const waveHeight =
          Math.sin(time * 4 + k * 0.4) *
          (isHovered ? 16 : 8) *
          Math.sin((k / waveBars) * Math.PI);
        ctx.beginPath();
        ctx.moveTo(barX, centerY - waveHeight);
        ctx.lineTo(barX, centerY + waveHeight);
        ctx.strokeStyle = k % 2 === 0 ? "rgba(56, 189, 248, 0.7)" : "rgba(168, 85, 247, 0.7)";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  const handleOrbClick = () => {
    setClickPulse((prev) => prev + 1);
    if (onOrbClick) onOrbClick();
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer ambient blur glow */}
      <div
        className={`absolute w-72 h-72 rounded-full transition-all duration-700 pointer-events-none ${
          isHovered
            ? "bg-gradient-to-r from-blue-500/30 via-purple-600/30 to-cyan-400/30 blur-3xl scale-125"
            : "bg-gradient-to-r from-blue-600/20 via-purple-700/20 to-cyan-500/20 blur-2xl scale-100"
        }`}
      />

      {/* Main Canvas Container */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleOrbClick}
        className={`relative z-10 cursor-pointer rounded-full p-2 transition-all duration-300 ${
          interactive ? "cursor-pointer" : ""
        }`}
        title="Interact with NOVIS Intelligence Core"
      >
        <canvas
          ref={canvasRef}
          width={340}
          height={340}
          className="relative z-10 max-w-[280px] sm:max-w-[340px] h-auto drop-shadow-[0_0_35px_rgba(56,189,248,0.35)]"
        />

        {/* Center NOVIS Wordmark / Status Pulse */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
          <motion.div
            key={clickPulse}
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <span className="text-xl sm:text-2xl font-black tracking-widest text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] font-mono">
              NOVIS
            </span>
            <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {isHovered ? "ONLINE & READY" : "CORE ACTIVE"}
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Sub-label & Click hint */}
      <div className="mt-4 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-xs text-slate-300 backdrop-blur-md shadow-sm">
          <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="font-mono text-[11px] text-cyan-200">{statusText}</span>
        </div>
        <p className="text-[11px] text-slate-400 mt-1 font-mono">
          Hover to spin rings • Click to trigger neural resonance
        </p>
      </div>
    </div>
  );
};
