import { motion } from "framer-motion";
import {
    Bell,
    LayoutDashboard,
    BarChart3,
    Sparkles,
    RefreshCw,
    Menu,
    Download
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import techMap from "../utils/categoryMap.js"

const Navbar = ({name , avatarUrl , skillScores , onExport , onAnalyseAgain}) => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const mainRole = Object.entries(skillScores)
    .sort((a, b) => b[1] - a[1])[0][0];

    const displayMainRole = techMap[mainRole]
    
    return (
        <>
            
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-[#09090B]/70"
            >
                <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

                    {/* Left */}
                    <div className="flex items-center gap-12">

                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">

                            <div
                                className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center"
                                data-id="2258xjfw"
                            >
                                <i className="fas fa-code text-white text-sm" data-id="9grjuson" />
                            </div>

                            <div>
                                <h1 className="text-white font-bold text-xl tracking-wide">
                                    DevDNA
                                </h1>

                                <p className="text-xs text-gray-400">
                                    Developer Intelligence
                                </p>
                            </div>

                        </Link>

                        {/* Desktop Links */}

                        <div className="hidden lg:flex items-center gap-2">

                            <NavItem
                                icon={<LayoutDashboard size={18} />}
                                title="Dashboard"
                                active
                            />

                        </div>

                    </div>

                    {/* Right */}

                    <div className="hidden lg:flex items-center gap-4">

                        {/* Analyze Again */}

                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: .97 }}
                            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 cursor-pointer"
                            onClick={onAnalyseAgain}
                        >
                            <RefreshCw size={17} />
                            Analyze Again
                        </motion.button>

                        {/* Export PDF */}

                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: .97 }}
                            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 cursor-pointer"
                            onClick={onExport}
                        >
                            <Download size={17} />
                            Export PDF
                        </motion.button>

                        {/* Profile */}

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
                        >

                            <img
                                src={avatarUrl || "https://github.com/github.png"}
                                className="h-10 w-10 rounded-full object-cover"
                            />

                            <div className="text-left">

                                <h2 className="text-sm font-semibold text-white">
                                    {name}
                                </h2>

                                <p className="text-xs text-gray-400">
                                    {displayMainRole}
                                </p>

                            </div>

                        </motion.div>

                    </div>

                    {/* Mobile */}

                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className="lg:hidden text-white"
                    >
                        <Menu />
                    </button>

                </div>

                {/* Mobile Menu */}

                {mobileMenu && (

                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-white/10 bg-[#09090B]"
                    >

                        <div className="flex flex-col gap-3 p-6">

                            <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
                        >

                            <img
                                src={avatarUrl || "https://github.com/github.png"}
                                className="h-10 w-10 rounded-full object-cover"
                            />

                            <div className="text-left">

                                <h2 className="text-sm font-semibold text-white">
                                    {name}
                                </h2>

                                <p className="text-xs text-gray-400">
                                    {displayMainRole}
                                </p>

                            </div>

                        </motion.div>

                            <button className="mt-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-white font-semibold" onClick={onAnalyseAgain}>

                                Analyze Again

                            </button>

                            <button className="mt-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-white font-semibold" onClick={onExport}>

                                Export PDF

                            </button>

                        </div>

                    </motion.div>

                )}

            </motion.nav>
        </>
    );
};

const NavItem = ({ icon, title, active }) => {

    return (

        <motion.div
            whileHover={{ y: -2 }}
            className={`flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-sm transition-all

      ${active
                    ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }

      `}
        >

            {icon}

            {title}

        </motion.div>

    );
};

export default Navbar;