import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const LoadingScreen = () => {
    return (
        <div className="min-h-screen bg-[#09090B] flex flex-col items-center justify-center px-6">

            {/* Logo */}

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="relative"
            >
                <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30" />

                <div
                    className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center"
                    data-id="2258xjfw"
                >
                    <i className="fas fa-code text-white text-sm" data-id="9grjuson" />
                </div>
            </motion.div>

            {/* Title */}

            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 0.3,
                }}
                className="mt-8 text-5xl font-bold text-white"
            >
                DevDNA
            </motion.h1>

            <p className="mt-3 text-gray-400 text-lg">
                Developer Intelligence
            </p>

            {/* Progress */}

            <div className="mt-12 w-full max-w-lg">

                <div className="flex justify-between text-sm text-gray-500 mb-3">

                    <span>Analyzing GitHub Profile</span>

                    <span>Please wait...</span>

                </div>

                <div className="h-2 rounded-full bg-white/10 overflow-hidden">

                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{
                            width: ["10%", "45%", "80%", "100%"],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    />

                </div>

            </div>

            {/* Skeleton Dashboard */}

            <div className="mt-14 w-full max-w-6xl">

                <div className="grid md:grid-cols-3 gap-6">

                    {[...Array(3)].map((_, i) => (

                        <motion.div
                            key={i}
                            animate={{
                                opacity: [0.35, 0.8, 0.35],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                delay: i * 0.15,
                            }}
                            className="rounded-3xl border border-white/10 bg-white/5 p-6"
                        >

                            <div className="h-5 w-32 rounded bg-white/10" />

                            <div className="mt-6 h-10 w-24 rounded bg-white/10" />

                            <div className="mt-8 h-3 w-full rounded bg-white/10" />

                            <div className="mt-3 h-3 w-3/4 rounded bg-white/10" />

                        </motion.div>

                    ))}

                </div>

            </div>

            {/* Status */}

            <motion.p
                animate={{
                    opacity: [0.4, 1, 0.4],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                }}
                className="mt-12 text-cyan-300 text-center"
            >
                Detecting technologies • Calculating role compatibility • Building dashboard...
            </motion.p>

            <motion.p
                animate={{
                    opacity: [0.4, 1, 0.4],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                }}
                className="mt-12 text-gray-400 text-center"
            >
                This platform fetches and analyzes data from the repositories and projects available on your GitHub profile. If your profile primarily contains private repositories or projects, the platform may have limited data available . As a result , may not be able to generate meaningful insights or analysis.
            </motion.p>

        </div>
    );
};

export default LoadingScreen;