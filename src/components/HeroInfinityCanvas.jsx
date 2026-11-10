import React, { useEffect, useRef } from 'react';

export default function HeroInfinityCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const checkReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle Resize
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates for gentle parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particle field
    const particleCount = Math.min(Math.floor(width / 18), 65);
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.8,
        speedY: Math.random() * 0.4 + 0.15,
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.6 + 0.2,
        color: i % 3 === 0 ? '#55A6AC' : i % 3 === 1 ? '#E32655' : '#6845F5',
      });
    }

    let time = 0;

    // Render loop
    const render = () => {
      // Ease mouse
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Draw floating particles
      particles.forEach((p) => {
        if (!checkReducedMotion) {
          p.y -= p.speedY;
          p.x += p.speedX;
          if (p.y < 0) {
            p.y = height;
            p.x = Math.random() * width;
          }
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      // Calculate Lemniscate of Bernoulli parametric coordinates
      // centerX, centerY with subtle mouse parallax
      const offsetX = (mouseX - width / 2) * 0.06;
      const offsetY = (mouseY - height / 2) * 0.06;
      const cx = width / 2 + offsetX;
      const cy = height * 0.38 + offsetY;

      // Scale based on screen size
      const scale = Math.min(width * 0.26, height * 0.28, 220);

      // Draw glowing background loop aura
      ctx.save();
      ctx.shadowBlur = 40;
      ctx.shadowColor = '#6845F5';
      ctx.globalAlpha = 0.25;
      ctx.lineWidth = 14;
      ctx.beginPath();

      const steps = 140;
      for (let i = 0; i <= steps; i++) {
        const t = (i / steps) * Math.PI * 2;
        const denom = 1 + Math.sin(t) * Math.sin(t);
        const x = cx + (scale * Math.cos(t)) / denom;
        const y = cy + (scale * Math.sin(t) * Math.cos(t)) / denom;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = '#3020A5';
      ctx.stroke();
      ctx.restore();

      // Draw core multi-gradient infinity loop
      ctx.save();
      ctx.lineWidth = 4.5;
      ctx.shadowBlur = 22;

      for (let i = 0; i < steps; i++) {
        const t1 = (i / steps) * Math.PI * 2;
        const t2 = ((i + 1) / steps) * Math.PI * 2;

        const denom1 = 1 + Math.sin(t1) * Math.sin(t1);
        const x1 = cx + (scale * Math.cos(t1)) / denom1;
        const y1 = cy + (scale * Math.sin(t1) * Math.cos(t1)) / denom1;

        const denom2 = 1 + Math.sin(t2) * Math.sin(t2);
        const x2 = cx + (scale * Math.cos(t2)) / denom2;
        const y2 = cy + (scale * Math.sin(t2) * Math.cos(t2)) / denom2;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);

        // Color gradient matching the official logo:
        // Left loop (x < cx) -> Teal (#55A6AC)
        // Right loop (x > cx) -> Crimson (#E32655)
        // Center cross -> Electric Violet (#6845F5)
        const normalizedX = (x1 - (cx - scale)) / (scale * 2);
        if (normalizedX < 0.45) {
          ctx.strokeStyle = '#55A6AC';
          ctx.shadowColor = '#55A6AC';
        } else if (normalizedX > 0.55) {
          ctx.strokeStyle = '#E32655';
          ctx.shadowColor = '#E32655';
        } else {
          ctx.strokeStyle = '#6845F5';
          ctx.shadowColor = '#6845F5';
        }

        ctx.globalAlpha = 0.85;
        ctx.stroke();
      }
      ctx.restore();

      // Flowing energy comets tracing the infinity path
      if (!checkReducedMotion) {
        time += 0.015;
      }

      const cometCount = 3;
      for (let c = 0; c < cometCount; c++) {
        const cometT = (time + (c * Math.PI * 2) / cometCount) % (Math.PI * 2);
        const cometDenom = 1 + Math.sin(cometT) * Math.sin(cometT);
        const cometX = cx + (scale * Math.cos(cometT)) / cometDenom;
        const cometY = cy + (scale * Math.sin(cometT) * Math.cos(cometT)) / cometDenom;

        const cometColor = c === 0 ? '#55A6AC' : c === 1 ? '#E32655' : '#FFFFFF';

        ctx.save();
        ctx.beginPath();
        ctx.arc(cometX, cometY, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = cometColor;
        ctx.shadowBlur = 25;
        ctx.shadowColor = cometColor;
        ctx.globalAlpha = 1;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      aria-hidden="true"
    />
  );
}
