import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { getTechIcon } from "../utils/techIcons.js"
import { Icon } from "@iconify/react";
import { getLearningMeta } from "../utils/learningMeta.js";

const TechToLearn = ({ techToLearn }) => {
    const technologies = []
    for (const tech of techToLearn) {
        technologies.push(tech)
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full rounded-3xl border border-white/10 bg-[#0F172A]/80 backdrop-blur-xl p-8 shadow-2xl mt-5"
        >
            {/* Header */}

            <div className="flex items-center justify-between mb-8">
                <div>
                    <div className="flex items-center gap-3">
                        <BookOpen className="text-cyan-400" size={26} />
                        <h2 className="text-3xl font-bold text-white">
                            Learning Roadmap
                        </h2>
                    </div>

                    <p className="text-gray-400 mt-2">
                        Technologies that will strengthen your developer profile.
                    </p>
                </div>

                <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm font-medium">
                    {technologies.length} Skills Recommended
                </span>
            </div>

            {/* Cards */}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {technologies.map((tech, index) => {

                    const IconLogo = getTechIcon(tech) || BookOpen;
                    const { difficulty, priority } = getLearningMeta(tech)

                    return (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.05
                            }}
                            whileHover={{
                                y: -6,
                                scale: 1.02
                            }}
                            className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400/40 transition-all"
                        >
                            <div className="flex items-center justify-between">

                                <div className="h-14 w-14 rounded-xl bg-gray-800/10 flex items-center justify-center">
                                    <Icon icon={IconLogo} width={35}
                                        height={35} className="text-emerald-600" />
                                </div>

                                <ArrowUpRight
                                    size={18}
                                    className="text-gray-500 group-hover:text-cyan-300 transition"
                                />

                            </div>

                            <h3 className="text-white text-xl font-semibold mt-6">
                                {tech}
                            </h3>

                            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                                {difficulty}
                            </span>

                            <span
                                className={`rounded-full px-3 py-1 text-xs ml-3 ${priority === "High"
                                        ? "bg-red-500/10 text-red-300"
                                        : priority === "Medium"
                                            ? "bg-yellow-500/10 text-yellow-300"
                                            : "bg-green-500/10 text-green-300"
                                    }`}
                            >
                                {priority} Priority
                            </span>

                            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                Learning <span className="text-cyan-300">{tech}</span> will
                                broaden your technical skillset and improve your compatibility
                                with more software engineering roles.
                            </p>

                            <button
                                onClick={() =>
                                    window.open(`https://www.google.com/search?q=${tech}`, "_blank", "noopener,noreferrer")
                                }
                                className="mt-6 w-full rounded-xl bg-cyan-500/10 border border-cyan-500/30 py-3 text-cyan-300 font-medium hover:bg-cyan-500 hover:text-white transition cursor-pointer"
                            >
                                Learn More
                            </button>
                        </motion.div>
                    );

                })}

            </div>

            {/* Footer */}

            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
                <h3 className="text-white font-semibold text-lg">
                    🚀 Keep Growing
                </h3>

                <p className="text-gray-400 mt-2">
                    Your strongest role becomes even more competitive as you master these
                    technologies. Focus on one or two at a time to build deeper expertise
                    and stronger project experience.
                </p>
            </div>

        </motion.section>
    );
};

export default TechToLearn;