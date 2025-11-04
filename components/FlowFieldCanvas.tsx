"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  hue: number;
};

const PARTICLE_COUNT = 160;
const MAX_SPEED = 0.6;
const TAIL_LENGTH = 60;

export function FlowFieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame: number;
    const dpr = Math.min(window.devicePixelRatio ?? 1, 2);

    const pointer = {
      x: canvas.clientWidth / 2,
      y: canvas.clientHeight / 2,
      active: false
    };

    const particles: Particle[] = new Array(PARTICLE_COUNT)
      .fill(0)
      .map(() => ({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        vx: 0,
        vy: 0,
        life: Math.random() * TAIL_LENGTH,
        hue: 200 + Math.random() * 80
      }));

    const resize = () => {
      const { clientWidth, clientHeight } = canvas;
      canvas.width = clientWidth * dpr;
      canvas.height = clientHeight * dpr;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);
    };

    resize();

    const draw = () => {
      const { width, height } = canvas;
      context.fillStyle = "rgba(5, 8, 20, 0.14)";
      context.fillRect(0, 0, width, height);

      particles.forEach((particle) => {
        const angle =
          Math.sin(particle.x * 0.002) * Math.cos(particle.y * 0.002) * Math.PI;
        particle.vx += Math.cos(angle) * 0.22;
        particle.vy += Math.sin(angle) * 0.22;

        if (pointer.active) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const distance = Math.max(Math.hypot(dx, dy), 1);
          const influence = Math.min(180 / distance, 0.9);
          particle.vx += (dx / distance) * influence * 0.12;
          particle.vy += (dy / distance) * influence * 0.12;
          particle.hue = 200 + influence * 120;
        }

        const speed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2);
        if (speed > MAX_SPEED) {
          particle.vx = (particle.vx / speed) * MAX_SPEED;
          particle.vy = (particle.vy / speed) * MAX_SPEED;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1 + Math.random() * 0.5;

        if (
          particle.x < -50 ||
          particle.y < -50 ||
          particle.x > canvas.clientWidth + 50 ||
          particle.y > canvas.clientHeight + 50 ||
          particle.life <= 0
        ) {
          particle.x = Math.random() * canvas.clientWidth;
          particle.y = Math.random() * canvas.clientHeight;
          particle.vx = 0;
          particle.vy = 0;
          particle.life = TAIL_LENGTH;
          particle.hue = 200 + Math.random() * 80;
        }

        context.beginPath();
        context.fillStyle = `hsla(${particle.hue}, 78%, 74%, 0.65)`;
        context.arc(particle.x, particle.y, 1.4, 0, Math.PI * 2);
        context.fill();
      });

      animationFrame = requestAnimationFrame(draw);
    };

    const handleResize = () => resize();

    const getRelativePosition = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.active = true;
      getRelativePosition(event);
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    draw();
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerdown", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerdown", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}
