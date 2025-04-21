// components/ui/timeline.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    FaYoutube,
    FaGithub,
    FaExternalLinkAlt,
    FaLinkedin,
} from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import Iphone15Pro from "@/components/iphone15pro";
import { Safari } from "@/components/safari";

export interface TimelineEntry {
    title: string;
    year: string;
    company?: { name: string; logo?: string };
    subtitle?: string;
    description?: string;
    tags?: { name: string; icon: JSX.Element }[];
    links?: {
        github?: string;
        devpost?: string;
        youtube?: string;
        website?: string;
        hackathonPage?: string;
        linkedin?: string;
    };
    award?: boolean;
    iPhoneImages?: string[];
    safariImages?: string[];
    images?: string[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 10%", "end end"],
    });
    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    useEffect(() => {
        const ro = new ResizeObserver(() => {
            if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
        });
        if (ref.current) ro.observe(ref.current);
        return () => ro.disconnect();
    }, []);

    return (
        <div className="w-full bg-white dark:bg-black font-sans md:px-10">
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20 min-h-screen">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10 min-h-[60vh]">
                        {/* Timeline Marker & Title */}
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <div className="hidden md:flex flex-col md:pl-20 min-w-[18rem] break-words">
                                <h3 className="text-5xl font-bold text-pink-500">{item.title}</h3>
                                <div className="flex justify-between text-base text-white mt-1 font-light items-center gap-2">
                                    <span className="italic text-sm text-gray-800 dark:text-gray-300">{item.year}</span>
                                    {item.company && (
                                        <span className="flex items-center gap-2">
                      <span>{item.company.name}</span>
                                            {item.company.logo && (
                                                <img
                                                    src={item.company.logo}
                                                    alt={`${item.company.name} logo`}
                                                    className="h-6 w-auto object-contain"
                                                />
                                            )}
                    </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Content & Links Section */}
                        <div className="relative pl-20 pr-4 md:pl-4 w-full break-words">
                            {/* Mobile Title */}
                            <div className="md:hidden mb-4">
                                <h3 className="text-2xl font-bold text-pink-500">{item.title}</h3>
                                <div className="flex justify-between text-base mt-1 font-light items-center gap-2">
                                    <span className="italic text-xs text-gray-800 dark:text-gray-300">{item.year}</span>
                                    {item.company && (
                                        <span className="flex items-center gap-2">
                      <span>{item.company.name}</span>
                                            {item.company.logo && (
                                                <img
                                                    src={item.company.logo}
                                                    alt={`${item.company.name} logo`}
                                                    className="h-5 w-auto object-contain"
                                                />
                                            )}
                    </span>
                                    )}
                                </div>
                            </div>

                            {/* Subtitle (with trophy prefix if awarded) */}
                            {item.subtitle && (
                                <h4 className="text-xl font-semibold text-white mb-4">
                                    {item.award ? `🏆 ${item.subtitle}` : item.subtitle}
                                </h4>
                            )}

                            {/* Two-column grid: description + tags on left, links on right */}
                            <div className="grid grid-cols-[1fr_auto] gap-6">
                                {/* Left: description, tags */}
                                <div className="space-y-4">
                                    {item.description && (
                                        <p className="text-sm text-neutral-400 leading-relaxed text-left">
                                            {item.description}
                                        </p>
                                    )}
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {item.tags?.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="flex items-center gap-2 bg-neutral-800 text-white text-sm px-3 py-1 rounded-full border border-neutral-700"
                                            >
                        {tag.icon}
                                                {tag.name}
                      </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: vertically stacked links */}
                                {item.links && (
                                    <div className="flex flex-col items-end space-y-2">
                                        {item.links.github && <a href={item.links.github} target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub className="w-6 h-6 hover:scale-110 transition text-white" /></a>}
                                        {item.links.devpost && <a href={item.links.devpost} target="_blank" rel="noopener noreferrer" title="Devpost"><SiDevpost className="w-6 h-6 hover:scale-110 transition text-[#003EFF]" /></a>}
                                        {item.links.youtube && <a href={item.links.youtube} target="_blank" rel="noopener noreferrer" title="YouTube"><FaYoutube className="w-6 h-6 hover:scale-110 transition text-red-500" /></a>}
                                        {item.links.website && <a href={item.links.website} target="_blank" rel="noopener noreferrer" title="Website"><FaExternalLinkAlt className="w-6 h-6 hover:scale-110 transition text-white" /></a>}
                                        {item.links.linkedin && <a href={item.links.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin className="w-6 h-6 hover:scale-110 transition text-[#0e76a8]" /></a>}
                                        {item.links.hackathonPage && <a href={item.links.hackathonPage} target="_blank" rel="noopener noreferrer" title="Hackathon Page"><FaExternalLinkAlt className="w-6 h-6 hover:scale-110 transition text-white" /></a>}
                                    </div>
                                )}
                            </div>

                            {/* Images Below */}
                            {item.iPhoneImages && (
                                <div className="grid gap-4 mt-6 w-full" style={{ gridTemplateColumns: `repeat(${item.iPhoneImages.length}, minmax(0, 1fr))` }}>
                                    {item.iPhoneImages.map((src, i) => (<div key={i} className="w-full aspect-[433/882]"><Iphone15Pro className="w-full h-full" src={src}/></div>))}
                                </div>
                            )}
                            {item.safariImages && (
                                <div className="grid gap-4 mt-6 w-full" style={{ gridTemplateColumns: `repeat(${item.safariImages.length}, minmax(0, 1fr))` }}>
                                    {item.safariImages.map((src, i) => (<div key={i} className="w-full"><Safari className="w-full" imageSrc={src} url={item.links?.website || ''}/></div>))}
                                </div>
                            )}
                            {item.images && (
                                <div className="grid gap-4 mt-6 w-full" style={{ gridTemplateColumns: `repeat(${item.images.length}, minmax(0, 1fr))` }}>
                                    {item.images.map((src, i) => (<img key={i} src={src} alt={`screenshot ${i+1}`} className="rounded-xl object-cover w-full h-48 border border-neutral-800"/>))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {/* Scroll Progress Line */}
                <div style={{ height: height + "px" }} className="absolute z-0 md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
                    <motion.div style={{ height: heightTransform, opacity: opacityTransform }} className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full" />
                </div>
            </div>
        </div>
    );
};