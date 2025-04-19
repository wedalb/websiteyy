"use client";

import { motion } from "framer-motion";
import { WrenchIcon } from "@heroicons/react/24/outline";
import { WavyBackground } from "@/components/ui/wavy-background";

export const UnderConstruction = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col items-center pt-24 overflow-hidden bg-black text-white px-4"
        >
            {/* Wavy canvas background */}
            <WavyBackground />

            {/* Gradient fade at the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />

            {/* Content block */}
            <motion.div
                className="relative z-20 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                {/* Glowing pulse behind icon */}
                <div className="relative mb-6 flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.15, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute w-20 h-20 rounded-full bg-[#ffe066] blur-2xl opacity-30"
                    />
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                        className="z-10 p-4 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-lg"
                    >
                        <WrenchIcon className="w-10 h-10 text-[#ffe066] drop-shadow-md" />
                    </motion.div>
                </div>


                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl sm:text-5xl font-bold tracking-tight text-white text-center"
                >
                    Under Construction
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 max-w-xl text-center text-neutral-300 text-base sm:text-lg leading-relaxed"
                >
                    I’m working on something magical behind the scenes. Come back soon for the full reveal ✨
                </motion.p>
            </motion.div>
        </motion.section>
    );
};
