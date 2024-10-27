import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dots = [];
    const mouse = { x: -9999, y: -9999 }; // Initially place mouse out of bounds

    // Resize canvas to fill the screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate random dots with purple, blue, and pink hues
    const generateRandomColor = () => {
      const hue = Math.random() * 60 + 240; // Hue between 240 (blue) and 300 (purple/pink)
      return `hsl(${hue}, 100%, 70%)`; // Full saturation, 70% lightness for vibrant colors
    };

    for (let i = 0; i < 250; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        color: generateRandomColor(),
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      });
    }

    // Handle mouse movement
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Update and draw dots
    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(dot => {
        dot.x += dot.dx;
        dot.y += dot.dy;

        // Bounce dots off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.dx = -dot.dx;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy = -dot.dy;

        // Draw the dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();

        // Only draw connecting lines when the mouse is near
        const mouseDistance = Math.hypot(dot.x - mouse.x, dot.y - mouse.y);
        if (mouseDistance < 150) {
          dots.forEach(otherDot => {
            const distance = Math.hypot(dot.x - otherDot.x, dot.y - otherDot.y);
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(otherDot.x, otherDot.y);

              // Use purple/blue/pink hues for connecting lines
              const hue = 240 + ((dot.x / canvas.width) * 60); // Map x position to hue (240 - 300)
              ctx.strokeStyle = `hsla(${hue}, 100%, 80%, ${1 - distance / 100})`; // Soft gradient
              ctx.stroke();
            }
          });

          // Connect dots to mouse with purple/pink lines
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);

          // Use pink for mouse connection
          ctx.strokeStyle = `rgba(255, 105, 180, ${1 - mouseDistance / 150})`; // Pink color (Hot Pink)
          ctx.stroke();
        }
      });

      requestAnimationFrame(update);
    };

    update();

    // Clean up event listener on component unmount
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="section">
      <canvas ref={canvasRef} className="dots-canvas"></canvas>
     
        <div className="bannerText">
          <h1>
            My name is <span className="Jaseane">Jaseane</span>
          </h1>
          <div className="type-animation-wrapper">
            <span className="Jaseane">I am a </span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer,',
                1500,
                'Creative Innovator,',
                1500,
                'Lifelong Learner',
                1500,
              ]}
              wrapper="span"
              cursor={false}
              repeat={Infinity}
            />
          </div>
        </div>
      
    </div>
  );
};

export default Banner;
