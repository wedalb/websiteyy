"use client";
import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
    year?: string;
    company?: string;
    logo?: string;
    tags?: string[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-white dark:bg-black font-sans md:px-10"
            ref={containerRef}
        >
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>

                            {/* Desktop Title */}
                            <div className="hidden md:flex flex-col md:pl-20 min-w-[18rem] break-words whitespace-normal overflow-hidden">
                                <h3 className="text-5xl font-bold text-pink-500 text-left">
                                    {item.title}
                                </h3>
                                <div className="flex justify-between text-base text-white mt-1 font-light items-center gap-2">
                                    <span className="italic text-sm text-gray-800 dark:text-gray-300">{item.year}</span>
                                    <span className="flex items-center gap-2">
                                        {item.company}
                                        {item.logo && (
                                            <img
                                                src={item.logo}
                                                alt={`${item.company} logo`}
                                                className="h-6 w-auto object-contain"
                                            />
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full break-words">
                            {/* Mobile Title */}
                            <div className="md:hidden block mb-4 min-w-[18rem] break-words whitespace-normal overflow-hidden">
                                <h3 className="text-2xl font-bold text-pink-500 text-left">
                                    {item.title}
                                </h3>
                                <div className="flex justify-between text-base text-white mt-1 font-light items-center gap-2">
                                    <span className="italic text-xs text-gray-800 dark:text-gray-300">
        {item.year}
      </span>
                                    <span className="flex items-center gap-2">
                                        {item.company}
                                        {item.logo && (
                                            <img
                                                src={item.logo}
                                                alt={`${item.company} logo`}
                                                className="h-5 w-auto object-contain"
                                            />
                                        )}
                                    </span>
                                </div>
                            </div>

                            {item.content}
                        </div>
                    </div>
                ))}

                {/* Scroll Progress Line */}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
