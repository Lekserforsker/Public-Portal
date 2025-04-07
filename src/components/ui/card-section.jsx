import React from "react";
import { cn } from "@/lib/utils"; 
import  '../../news-slider-section.css';

export const Card = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg bg-transparent", className)} {...props}>
    {children}
  </div>
));
Card.displayName = "Card";

export const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

export const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4", className)} {...props} />
));
CardContent.displayName = "CardContent";
