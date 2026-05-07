"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const scanningMessages = [
  "Connexion aux bases de donnees...",
  "Recherche dans les registres publics...",
  "Analyse des reseaux sociaux...",
  "Verification des donnees...",
  "Croisement des informations...",
  "Compilation du rapport...",
];

interface ScanningAnimationProps {
  isActive: boolean;
}

export function ScanningAnimation({ isActive }: ScanningAnimationProps) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCurrentMessage(0);
      setProgress(0);
      return;
    }

    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % scanningMessages.length);
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + Math.random() * 15, 95));
    }, 300);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-8">
      {/* Animated Scanner Circle */}
      <div className="relative">
        <div className="w-32 h-32 rounded-full border-4 border-primary/20 relative overflow-hidden">
          {/* Scanning line */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent animate-scan"
            style={{
              animation: "scan 2s ease-in-out infinite",
            }}
          />
          {/* Pulsing center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-primary rounded-full animate-ping" />
          </div>
          {/* Rotating border */}
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"
            style={{ animationDuration: "1.5s" }}
          />
        </div>
        
        {/* Orbit dots */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "3s" }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-primary rounded-full" />
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "4s", animationDirection: "reverse" }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-accent rounded-full" />
        </div>
      </div>

      {/* Status Message */}
      <div className="text-center space-y-4">
        <p className={cn(
          "text-primary font-mono text-sm transition-all duration-300",
          "animate-pulse"
        )}>
          {scanningMessages[currentMessage]}
        </p>
        
        {/* Progress Bar */}
        <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-muted-foreground text-xs font-mono">
          {Math.round(progress)}% complete
        </p>
      </div>

      <style jsx>{`
        @keyframes scan {
          0%, 100% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  );
}
