"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Subtle particles
    const particleCount = Math.min(Math.floor((width * height) / 35000), 50);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReduced]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#0B1120]">
      {/* Aurora Ambient Gradients */}
      <div
        className="absolute -top-[25%] -left-[10%] w-[650px] h-[650px] rounded-full opacity-25 blur-[130px] animate-blob pointer-events-none"
        style={{
          background: "radial-gradient(circle, #4F46E5 0%, rgba(79, 70, 229, 0) 70%)",
        }}
      />
      <div
        className="absolute top-[30%] -right-[15%] w-[600px] h-[600px] rounded-full opacity-20 blur-[140px] animate-blob pointer-events-none"
        style={{
          animationDelay: "3s",
          background: "radial-gradient(circle, #7C3AED 0%, rgba(124, 58, 237, 0) 70%)",
        }}
      />
      <div
        className="absolute top-[65%] left-[20%] w-[550px] h-[550px] rounded-full opacity-20 blur-[130px] animate-blob pointer-events-none"
        style={{
          animationDelay: "6s",
          background: "radial-gradient(circle, #06B6D4 0%, rgba(6, 182, 212, 0) 70%)",
        }}
      />

      {/* Subtle Grid Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      {/* Floating Canvas Particles */}
      {!prefersReduced && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        />
      )}
    </div>
  );
};
