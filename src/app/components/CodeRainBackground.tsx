'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

// Characters to use in the code rain
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>[]{}()*&^%$#@!';

interface Raindrop {
  x: number;
  y: number;
  length: number;
  speed: number;
  char: string;
  opacity: number;
  fontSize: number;
}

export default function CodeRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const raindrops = useRef<Raindrop[]>([]);
  const animationFrameId = useRef<number>(0);

  // Setup canvas and raindrops
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // Set canvas dimensions
        canvas.width = width;
        canvas.height = height;
        setDimensions({ width, height });
        
        // Reset raindrops when resizing
        initRaindrops(width, height);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  // Initialize raindrops
  const initRaindrops = (width: number, height: number) => {
    const drops: Raindrop[] = [];
    const dropCount = Math.floor(width / 20); // Adjust density here
    
    for (let i = 0; i < dropCount; i++) {
      drops.push(createRaindrop(width, height));
    }
    
    raindrops.current = drops;
  };

  // Create a single raindrop
  const createRaindrop = (width: number, height: number): Raindrop => {
    return {
      x: Math.random() * width,
      y: Math.random() * height - height, // Start above the screen
      length: 10 + Math.random() * 20,
      speed: 1 + Math.random() * 3,
      char: CHARS.charAt(Math.floor(Math.random() * CHARS.length)),
      opacity: 0.1 + Math.random() * 0.9,
      fontSize: 12 + Math.floor(Math.random() * 16) // Font size between 12px and 28px
    };
  };

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const primaryColor = theme === 'dark' ? '#FF0000' : '#E50000';
    const secondaryColor = theme === 'dark' ? '#FFFFFF' : '#000000';

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Fade effect
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);
      
      raindrops.current.forEach((drop, index) => {
        // Randomly change characters
        if (Math.random() > 0.95) {
          raindrops.current[index].char = CHARS.charAt(Math.floor(Math.random() * CHARS.length));
        }
        
        // Draw the character
        ctx.font = `${drop.fontSize}px 'Roboto Mono', monospace`;
        ctx.fillStyle = index % 5 === 0 ? secondaryColor : primaryColor; // Occasional white characters
        ctx.globalAlpha = drop.opacity;
        ctx.fillText(drop.char, drop.x, drop.y);
        
        // Move the raindrop
        raindrops.current[index].y += drop.speed;
        
        // Reset if it's off screen
        if (drop.y > dimensions.height) {
          raindrops.current[index] = createRaindrop(dimensions.width, dimensions.height);
          raindrops.current[index].y = 0; // Start at the top
        }
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [dimensions, theme]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 opacity-40 dark:opacity-30"
      style={{ background: 'transparent' }}
    />
  );
}
