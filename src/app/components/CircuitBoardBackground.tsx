'use client';

import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  connections: number[];
}

interface Line {
  start: number;
  end: number;
  progress: number;
  speed: number;
  color: string;
  width: number;
  completed: boolean;
}

export default function CircuitBoardBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const pointsRef = useRef<Point[]>([]);
  const linesRef = useRef<Line[]>([]);
  const pulsePointsRef = useRef<{index: number, radius: number, maxRadius: number, speed: number}[]>([]);

  // Initialize the circuit board
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Reset and generate new circuit
        generateCircuit(canvas.width, canvas.height);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Generate circuit points and connections
  const generateCircuit = (width: number, height: number) => {
    // Clear existing data
    pointsRef.current = [];
    linesRef.current = [];
    pulsePointsRef.current = [];
    
    // Calculate grid size based on screen dimensions
    const gridSize = Math.max(width, height) / 15;
    const cols = Math.ceil(width / gridSize);
    const rows = Math.ceil(height / gridSize);
    
    // Generate points with slight randomness
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        // Add some randomness to point positions
        const offsetX = (Math.random() - 0.5) * (gridSize * 0.5);
        const offsetY = (Math.random() - 0.5) * (gridSize * 0.5);
        
        pointsRef.current.push({
          x: x * gridSize + offsetX,
          y: y * gridSize + offsetY,
          connections: []
        });
      }
    }
    
    // Create connections between points
    const totalPoints = pointsRef.current.length;
    for (let i = 0; i < totalPoints; i++) {
      const point = pointsRef.current[i];
      
      // Find nearby points to connect
      for (let j = 0; j < totalPoints; j++) {
        if (i === j) continue;
        
        const otherPoint = pointsRef.current[j];
        const dx = otherPoint.x - point.x;
        const dy = otherPoint.y - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Connect points that are close enough but not too many
        if (distance < gridSize * 1.5 && point.connections.length < 3 && 
            otherPoint.connections.length < 3 && 
            !point.connections.includes(j) && 
            !otherPoint.connections.includes(i)) {
          
          point.connections.push(j);
          otherPoint.connections.push(i);
          
          // Create a line with animation properties
          linesRef.current.push({
            start: i,
            end: j,
            progress: 0,
            speed: 0.003 + Math.random() * 0.007, // Random speed
            color: '#E50000', // Red color
            width: 1 + Math.random(), // Random width
            completed: false
          });
        }
      }
    }
    
    // Create initial pulse points
    createPulsePoints(3);
  };
  
  // Create pulse points that will travel through the circuit
  const createPulsePoints = (count: number) => {
    for (let i = 0; i < count; i++) {
      const randomPointIndex = Math.floor(Math.random() * pointsRef.current.length);
      pulsePointsRef.current.push({
        index: randomPointIndex,
        radius: 0,
        maxRadius: 5 + Math.random() * 5,
        speed: 0.2 + Math.random() * 0.3
      });
    }
  };

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      linesRef.current.forEach((line, index) => {
        const startPoint = pointsRef.current[line.start];
        const endPoint = pointsRef.current[line.end];
        
        // Calculate current line segment
        const currentX = startPoint.x + (endPoint.x - startPoint.x) * line.progress;
        const currentY = startPoint.y + (endPoint.y - startPoint.y) * line.progress;
        
        // Draw the line segment
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.width;
        ctx.stroke();
        
        // Update line progress
        if (line.progress < 1) {
          line.progress += line.speed;
          if (line.progress >= 1) {
            line.progress = 1;
            line.completed = true;
          }
        }
      });
      
      // Draw points
      pointsRef.current.forEach((point, index) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#000000';
        ctx.fill();
      });
      
      // Draw and update pulse points
      pulsePointsRef.current.forEach((pulse, index) => {
        const point = pointsRef.current[pulse.index];
        
        // Draw pulse
        ctx.beginPath();
        ctx.arc(point.x, point.y, pulse.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(229, 0, 0, ' + (1 - pulse.radius / pulse.maxRadius) + ')';
        ctx.fill();
        
        // Update pulse
        pulse.radius += pulse.speed;
        
        // Reset pulse when it reaches max size
        if (pulse.radius > pulse.maxRadius) {
          // Find a connected point to move to
          if (point.connections.length > 0) {
            const randomConnection = Math.floor(Math.random() * point.connections.length);
            pulse.index = point.connections[randomConnection];
          } else {
            // If no connections, pick a random point
            pulse.index = Math.floor(Math.random() * pointsRef.current.length);
          }
          pulse.radius = 0;
        }
      });
      
      // Create new pulse points occasionally
      if (Math.random() < 0.01 && pulsePointsRef.current.length < 10) {
        createPulsePoints(1);
      }
      
      // Check if all lines are completed and regenerate some
      let allCompleted = true;
      linesRef.current.forEach(line => {
        if (!line.completed) allCompleted = false;
      });
      
      if (allCompleted && Math.random() < 0.05) {
        // Reset some random lines to create continuous animation
        const linesToReset = Math.floor(linesRef.current.length * 0.2);
        for (let i = 0; i < linesToReset; i++) {
          const randomIndex = Math.floor(Math.random() * linesRef.current.length);
          linesRef.current[randomIndex].progress = 0;
          linesRef.current[randomIndex].completed = false;
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 opacity-30"
      style={{ background: 'transparent' }}
    />
  );
}
