"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div className={cn("absolute inset-0 z-0 overflow-hidden", className)}>
            {/* Add your SVG or canvas-based beams animation here */}
            {/* This is a placeholder for the actual beams implementation */}
            <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                {/* SVG content for beams */}
            </svg>
        </div>
    );
};
