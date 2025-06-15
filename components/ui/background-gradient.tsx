import { cn } from "@/lib/utils";

interface BackgroundGradientProps {
  children: React.ReactNode;
  className?: string;
}

export function BackgroundGradient({ children, className }: BackgroundGradientProps) {
  return (
    <div className={cn("relative group", className)}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
      {children}
    </div>
  );
} 