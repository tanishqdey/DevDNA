import React from 'react'
import { Link } from 'react-router-dom'

const landingPage = () => {
    return (
        <>
            <meta charSet="UTF-8" data-id="1vmmfuz4" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
                data-id="elak6l1v"
            />
            <title data-id="tmk45vfs">DevDNA — Understand Your GitHub Profile</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                data-id="qkve1h49"
            />
            <link
                rel="preconnect"
                href="https://fonts.googleapis.com"
                data-id="bzc9r6sx"
            />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin=""
                data-id="anveufqb"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                rel="stylesheet"
                data-id="elghkkqa"
            />
            <style
                data-id="3srzkolm"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    * {\n      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n    }\n    \n    body {\n      background-color: #0D1117;\n      color: #F0F6FC;\n    }\n    \n    .text-secondary {\n      color: #8B949E;\n    }\n    \n    .bg-card {\n      background-color: #161B22;\n    }\n    \n    .border-subtle {\n      border-color: #30363D;\n    }\n    \n    .text-accent {\n      color: #3B82F6;\n    }\n    \n    .bg-accent {\n      background-color: #3B82F6;\n    }\n    \n    .hover-lift {\n      transition: transform 0.2s ease, box-shadow 0.2s ease;\n    }\n    \n    .hover-lift:hover {\n      transform: translateY(-4px);\n      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);\n    }\n    \n    .fade-in {\n      opacity: 0;\n      transform: translateY(20px);\n      animation: fadeInUp 0.6s ease forwards;\n    }\n    \n    @keyframes fadeInUp {\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n    \n    .delay-100 { animation-delay: 0.1s; }\n    .delay-200 { animation-delay: 0.2s; }\n    .delay-300 { animation-delay: 0.3s; }\n    .delay-400 { animation-delay: 0.4s; }\n    \n    .gradient-text {\n      background: linear-gradient(135deg, #3B82F6 0%, #22C55E 100%);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n      background-clip: text;\n    }\n    \n    .hero-pattern {\n      background-image: radial-gradient(circle at 1px 1px, #30363D 1px, transparent 0);\n      background-size: 40px 40px;\n    }\n    \n    .timeline-line {\n      background: linear-gradient(to bottom, #3B82F6, #22C55E);\n    }\n    \n    .nav-blur {\n      backdrop-filter: blur(12px);\n      background-color: rgba(13, 17, 23, 0.8);\n    }\n    \n    html {\n      scroll-behavior: smooth;\n    }\n    \n    .btn-primary {\n      background-color: #3B82F6;\n      transition: all 0.2s ease;\n    }\n    \n    .btn-primary:hover {\n      background-color: #2563EB;\n      transform: translateY(-1px);\n    }\n    \n    .btn-secondary {\n      border-color: #30363D;\n      transition: all 0.2s ease;\n    }\n    \n    .btn-secondary:hover {\n      border-color: #8B949E;\n      background-color: #161B22;\n    }\n    \n    .feature-icon {\n      background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%);\n    }\n    \n    .uibrainx-submenu {\n      background-color: #161B22;\n      border: 1px solid #30363D;\n    }\n    \n    .uibrainx-submenu a:hover {\n      background-color: #0D1117;\n      color: #F0F6FC;\n    }\n    \n    [data-menu-mobile] {\n      background-color: #161B22;\n      border-top: 1px solid #30363D;\n    }\n    \n    [data-menu-mobile] a:hover {\n      color: #3B82F6;\n    }\n  "
                }}
            />
            {/* Navigation */}
            <header
                className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-subtle"
                data-id="ml8li8e4"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8" data-id="8bpw0axb">
                    <div
                        data-menu-desktop-wrapper=""
                        className="flex items-center justify-between h-16"
                        data-id="8n2xnalw"
                    >
                        {/* Logo */}
                        <a href="/" className="flex items-center gap-2" data-id="y6ekibur">
                            <div
                                className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center"
                                data-id="2258xjfw"
                            >
                                <i className="fas fa-code text-white text-sm" data-id="9grjuson" />
                            </div>
                            <span className="font-semibold text-lg text-white" data-id="3inisrs5">
                                DevDNA
                            </span>
                        </a>
                        {/* Desktop Menu */}
                        <nav
                            data-menu-desktop=""
                            className="hidden md:block"
                            data-id="xh14rpch"
                        >
                            <ul className="flex items-center gap-8" data-id="n0smjfc4">
                                <li data-id="mlkq7mqr">
                                    <a
                                        href="#features"
                                        className="text-secondary hover:text-white transition-colors text-sm font-medium"
                                        data-id="6c6frrtq"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li data-id="qnc3q6di">
                                    <a
                                        href="#how-it-works"
                                        className="text-secondary hover:text-white transition-colors text-sm font-medium"
                                        data-id="7bz2dx7i"
                                    >
                                        How It Works
                                    </a>
                                </li>
                                <li data-id="i92qh1f1">
                                    <a
                                        href="#about"
                                        className="text-secondary hover:text-white transition-colors text-sm font-medium"
                                        data-id="kn7ae2cw"
                                    >
                                        About
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center gap-4" data-id="y0i39mi5">
                            <Link
                                to="/SignIn"
                                className="text-secondary hover:text-white transition-colors text-sm font-medium"
                                data-id="rzp2i8ly"
                            >
                                Sign In
                            </Link>
                            <Link
                                to="/SignUp"
                                className="btn-primary px-4 py-2 rounded-lg text-white text-sm font-medium"
                                data-id="czutrfmo"
                            >
                                Create Account
                            </Link>
                        </div>
                        {/* Mobile Toggle */}
                        <button
                            data-menu-toggle=""
                            className="md:hidden text-secondary hover:text-white"
                            data-id="nfjuhojj"
                        >
                            <i className="fas fa-bars text-xl" data-id="08h2s7la" />
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div
                    data-menu-mobile=""
                    className="hidden md:hidden px-6 pb-4"
                    data-id="l9kb31ge"
                >
                    <ul className="space-y-1" data-id="hpjkweeb">
                        <li data-id="ge319ln6">
                            <a
                                href="#features"
                                className="block py-3 text-secondary hover:text-white transition-colors text-sm font-medium"
                                data-id="lzoyr9es"
                            >
                                Features
                            </a>
                        </li>
                        <li data-id="2qx5e3re">
                            <a
                                href="#how-it-works"
                                className="block py-3 text-secondary hover:text-white transition-colors text-sm font-medium"
                                data-id="k242c0t8"
                            >
                                How It Works
                            </a>
                        </li>
                        <li data-id="0b0metst">
                            <a
                                href="#about"
                                className="block py-3 text-secondary hover:text-white transition-colors text-sm font-medium"
                                data-id="nyb5mll3"
                            >
                                About
                            </a>
                        </li>
                        <li className="pt-4 border-t border-subtle mt-4" data-id="zu2gspjz">
                            <Link
                                to="/SignIn"
                                className="block py-3 text-secondary hover:text-white transition-colors text-sm font-medium"
                                data-id="bht831ka"
                            >
                                Sign In
                            </Link>
                        </li>
                        <li data-id="vq06d22q">
                            <Link
                                to="/SignUp"
                                className="block py-3 text-accent font-medium text-sm"
                                data-id="co7u8zb1"
                            >
                                Create Account
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            {/* Hero Section */}
            <section
                className="relative min-h-screen flex items-center pt-16 hero-pattern"
                data-id="ebadzham"
            >
                <div
                    className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32"
                    data-id="b97n74bx"
                >
                    <div
                        className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                        data-id="vgik7ojk"
                    >
                        {/* Content */}
                        <div className="fade-in" data-id="yos1o4uj">
                            <h1
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                                data-id="0th4py10"
                            >
                                Understand Your{" "}
                                <span className="gradient-text" data-id="nckj5hdg">
                                    GitHub Profile
                                </span>
                                .
                                <br data-id="wfthosmj" />
                                Improve Your Developer Journey.
                            </h1>
                            <p
                                className="text-secondary text-lg leading-relaxed mb-8 max-w-xl"
                                data-id="j01wgea5"
                            >
                                DevDNA analyzes your public GitHub repositories to understand your
                                technical skills, identify areas for improvement, and help you grow
                                as a software engineer.
                            </p>
                            <p
                                className="text-secondary text-sm mb-8 max-w-xl"
                                data-id="vkn1cybh"
                            >
                                The platform provides role-based insights for developers interested
                                in areas like Full Stack Development, Backend Development, Frontend
                                Development, Machine Learning, Data Science, AI Engineering, DevOps,
                                and Cyber Security.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-id="pd91agj8">
                                <Link
                                    to="SignUp"
                                    className="btn-primary px-8 py-3 rounded-lg text-white font-medium text-center"
                                    data-id="tu5bm2hw"
                                >
                                    Create Free Account
                                </Link>
                                <Link
                                    to="SignIn"
                                    className="btn-secondary border px-8 py-3 rounded-lg text-white font-medium text-center"
                                    data-id="75mj8rx8"
                                >
                                    Sign In
                                </Link>
                            </div>
                        </div>
                        {/* Abstract Developer Illustration */}
                        <div className="fade-in delay-200 relative" data-id="hk8soeam">
                            <div
                                className="relative aspect-square max-w-lg mx-auto"
                                data-id="fjwmk7lf"
                            >
                                {/* Main Container */}
                                <div
                                    className="absolute inset-0 bg-card rounded-2xl border border-subtle overflow-hidden"
                                    data-id="hkrq831m"
                                >
                                    {/* Background Grid */}
                                    <div
                                        className="absolute inset-0 opacity-30"
                                        style={{
                                            backgroundImage:
                                                "radial-gradient(circle at 1px 1px, #30363D 1px, transparent 0)",
                                            backgroundSize: "24px 24px"
                                        }}
                                        data-id="ez0nlbav"
                                    />
                                    {/* Central GitHub Hub */}
                                    <div
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        data-id="o9gnwshj"
                                    >
                                        <div
                                            className="w-20 h-20 rounded-2xl bg-[#0D1117] border border-subtle flex items-center justify-center relative"
                                            data-id="ljmi87pc"
                                        >
                                            <i
                                                className="fab fa-github text-4xl text-white"
                                                data-id="4ianulga"
                                            />
                                            {/* Enhanced Glow effect */}
                                            <div
                                                className="absolute inset-0 rounded-2xl bg-accent opacity-30 blur-xl"
                                                data-id="k4n12h1n"
                                            />
                                            <div
                                                className="absolute -inset-4 rounded-3xl bg-accent/10 blur-2xl"
                                                data-id="jlo54krn"
                                            />
                                        </div>
                                    </div>
                                    {/* Product Workflow Cards */}
                                    {/* Repositories Card - Top Left */}
                                    <div className="absolute top-[12%] left-[12%]" data-id="sfry1l8i">
                                        <div
                                            className="px-3 py-2.5 bg-card border border-subtle rounded-lg shadow-lg flex items-center gap-2.5 hover-lift"
                                            data-id="n4y1x4o6"
                                        >
                                            <div
                                                className="w-7 h-7 rounded-md bg-blue-500/15 flex items-center justify-center"
                                                data-id="ptsvhk22"
                                            >
                                                <i
                                                    className="fas fa-folder-open text-blue-400 text-xs"
                                                    data-id="eoralhy1"
                                                />
                                            </div>
                                            <span
                                                className="text-xs font-medium text-white"
                                                data-id="1tqw2hmx"
                                            >
                                                Repositories
                                            </span>
                                        </div>
                                    </div>
                                    {/* Analysis Card - Top Right */}
                                    <div
                                        className="absolute top-[15%] right-[10%]"
                                        data-id="l9e7l873"
                                    >
                                        <div
                                            className="px-3 py-2.5 bg-card border border-subtle rounded-lg shadow-lg flex items-center gap-2.5 hover-lift"
                                            data-id="ds0o89zi"
                                        >
                                            <div
                                                className="w-7 h-7 rounded-md bg-purple-500/15 flex items-center justify-center"
                                                data-id="ovnif5uu"
                                            >
                                                <i
                                                    className="fas fa-microscope text-purple-400 text-xs"
                                                    data-id="aiw4rcl9"
                                                />
                                            </div>
                                            <span
                                                className="text-xs font-medium text-white"
                                                data-id="mq2wa6tk"
                                            >
                                                Analysis
                                            </span>
                                        </div>
                                    </div>
                                    {/* Skills Card - Left Middle */}
                                    <div className="absolute top-[42%] left-[5%]" data-id="mxwh3n14">
                                        <div
                                            className="px-3 py-2.5 bg-card border border-subtle rounded-lg shadow-lg flex items-center gap-2.5 hover-lift"
                                            data-id="p5d1xjxp"
                                        >
                                            <div
                                                className="w-7 h-7 rounded-md bg-green-500/15 flex items-center justify-center"
                                                data-id="y5hvyuj4"
                                            >
                                                <i
                                                    className="fas fa-brain text-green-400 text-xs"
                                                    data-id="nzeonft0"
                                                />
                                            </div>
                                            <span
                                                className="text-xs font-medium text-white"
                                                data-id="8vgd8iou"
                                            >
                                                Skills
                                            </span>
                                        </div>
                                    </div>
                                    {/* Scoring Card - Right Middle */}
                                    <div className="absolute top-[38%] right-[6%]" data-id="8a5wddo8">
                                        <div
                                            className="px-3 py-2.5 bg-card border border-subtle rounded-lg shadow-lg flex items-center gap-2.5 hover-lift"
                                            data-id="x9yb9ipf"
                                        >
                                            <div
                                                className="w-7 h-7 rounded-md bg-amber-500/15 flex items-center justify-center"
                                                data-id="7usx5opg"
                                            >
                                                <i
                                                    className="fas fa-star text-amber-400 text-xs"
                                                    data-id="hspyhmsj"
                                                />
                                            </div>
                                            <span
                                                className="text-xs font-medium text-white"
                                                data-id="dzce6okm"
                                            >
                                                Scoring
                                            </span>
                                        </div>
                                    </div>
                                    {/* Insights Card - Bottom Left */}
                                    <div
                                        className="absolute bottom-[18%] left-[10%]"
                                        data-id="e9qb893g"
                                    >
                                        <div
                                            className="px-3 py-2.5 bg-card border border-subtle rounded-lg shadow-lg flex items-center gap-2.5 hover-lift"
                                            data-id="7b3jtjuh"
                                        >
                                            <div
                                                className="w-7 h-7 rounded-md bg-cyan-500/15 flex items-center justify-center"
                                                data-id="pu6n1woy"
                                            >
                                                <i
                                                    className="fas fa-lightbulb text-cyan-400 text-xs"
                                                    data-id="xsosk4lb"
                                                />
                                            </div>
                                            <span
                                                className="text-xs font-medium text-white"
                                                data-id="mczatyu5"
                                            >
                                                Insights
                                            </span>
                                        </div>
                                    </div>
                                    {/* Matching Card - Bottom */}
                                    <div
                                        className="absolute bottom-[12%] left-[38%]"
                                        data-id="dou1efqy"
                                    >
                                        <div
                                            className="px-3 py-2.5 bg-card border border-subtle rounded-lg shadow-lg flex items-center gap-2.5 hover-lift"
                                            data-id="ti9akit2"
                                        >
                                            <div
                                                className="w-7 h-7 rounded-md bg-pink-500/15 flex items-center justify-center"
                                                data-id="88xochm5"
                                            >
                                                <i
                                                    className="fas fa-users text-pink-400 text-xs"
                                                    data-id="lreo7uj6"
                                                />
                                            </div>
                                            <span
                                                className="text-xs font-medium text-white"
                                                data-id="37hhjuym"
                                            >
                                                Matching
                                            </span>
                                        </div>
                                    </div>
                                    {/* Growth Card - Bottom Right */}
                                    <div
                                        className="absolute bottom-[20%] right-[12%]"
                                        data-id="jcv7fn9s"
                                    >
                                        <div
                                            className="px-3 py-2.5 bg-card border border-subtle rounded-lg shadow-lg flex items-center gap-2.5 hover-lift"
                                            data-id="wdcwxkvc"
                                        >
                                            <div
                                                className="w-7 h-7 rounded-md bg-emerald-500/15 flex items-center justify-center"
                                                data-id="mxrt7qlr"
                                            >
                                                <i
                                                    className="fas fa-chart-line text-emerald-400 text-xs"
                                                    data-id="2nh40zxl"
                                                />
                                            </div>
                                            <span
                                                className="text-xs font-medium text-white"
                                                data-id="avct94bd"
                                            >
                                                Growth
                                            </span>
                                        </div>
                                    </div>
                                    {/* Connection Lines (SVG) - Connecting all cards to center */}
                                    <svg
                                        className="absolute inset-0 w-full h-full pointer-events-none"
                                        style={{ zIndex: 0 }}
                                        data-id="wgc7jeyx"
                                    >
                                        {/* Repositories to center */}
                                        <line
                                            x1="50%"
                                            y1="50%"
                                            x2="22%"
                                            y2="18%"
                                            stroke="#3B82F6"
                                            strokeWidth={1}
                                            opacity="0.35"
                                            data-id="k5xlqv9m"
                                        />
                                        {/* Analysis to center */}
                                        <line
                                            x1="50%"
                                            y1="50%"
                                            x2="78%"
                                            y2="20%"
                                            stroke="#A855F7"
                                            strokeWidth={1}
                                            opacity="0.35"
                                            data-id="u7hvdgpv"
                                        />
                                        {/* Skills to center */}
                                        <line
                                            x1="50%"
                                            y1="50%"
                                            x2="14%"
                                            y2="46%"
                                            stroke="#22C55E"
                                            strokeWidth={1}
                                            opacity="0.35"
                                            data-id="zpgyjd9m"
                                        />
                                        {/* Scoring to center */}
                                        <line
                                            x1="50%"
                                            y1="50%"
                                            x2="86%"
                                            y2="42%"
                                            stroke="#F59E0B"
                                            strokeWidth={1}
                                            opacity="0.35"
                                            data-id="d1ffo58o"
                                        />
                                        {/* Insights to center */}
                                        <line
                                            x1="50%"
                                            y1="50%"
                                            x2="20%"
                                            y2="76%"
                                            stroke="#06B6D4"
                                            strokeWidth={1}
                                            opacity="0.35"
                                            data-id="pxwjqf11"
                                        />
                                        {/* Matching to center */}
                                        <line
                                            x1="50%"
                                            y1="50%"
                                            x2="46%"
                                            y2="82%"
                                            stroke="#EC4899"
                                            strokeWidth={1}
                                            opacity="0.35"
                                            data-id="xyqxjiqm"
                                        />
                                        {/* Growth to center */}
                                        <line
                                            x1="50%"
                                            y1="50%"
                                            x2="76%"
                                            y2="74%"
                                            stroke="#10B981"
                                            strokeWidth={1}
                                            opacity="0.35"
                                            data-id="hvym5108"
                                        />
                                    </svg>
                                    {/* Subtle gradient overlays */}
                                    <div
                                        className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/5 to-transparent"
                                        data-id="tirryhet"
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-500/5 to-transparent"
                                        data-id="u1k11ddp"
                                    />
                                </div>
                                {/* Outer decorative glow */}
                                <div
                                    className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
                                    data-id="r975stpk"
                                />
                                <div
                                    className="absolute -bottom-6 -left-6 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"
                                    data-id="nbp1qusb"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Features Section */}
            <section id="features" className="py-24 lg:py-32" data-id="v2ga96re">
                <div className="max-w-7xl mx-auto px-6 lg:px-8" data-id="klkbidnr">
                    <div className="text-center mb-16 fade-in" data-id="25wpj6ex">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-id="rjhu65ti">
                            Powerful Features for Developers
                        </h2>
                        <p
                            className="text-secondary text-lg max-w-2xl mx-auto"
                            data-id="covd50hv"
                        >
                            Everything you need to understand and improve your technical profile.
                        </p>
                    </div>
                    <div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        data-id="ixhvl5fb"
                    >
                        {/* Card 1 */}
                        <div
                            className="bg-card border border-subtle rounded-xl p-6 hover-lift fade-in delay-100"
                            data-id="pc8girt7"
                        >
                            <div
                                className="feature-icon w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                data-id="y2jbtbmf"
                            >
                                <i
                                    className="fas fa-search text-accent text-lg"
                                    data-id="0ed4un2e"
                                />
                            </div>
                            <h3 className="font-semibold text-lg mb-2" data-id="azcuuqa7">
                                GitHub Profile Analysis
                            </h3>
                            <p
                                className="text-secondary text-sm leading-relaxed"
                                data-id="y224bb7r"
                            >
                                Analyze repositories, programming languages, project technologies,
                                and coding activity.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div
                            className="bg-card border border-subtle rounded-xl p-6 hover-lift fade-in delay-200"
                            data-id="myyelxj8"
                        >
                            <div
                                className="feature-icon w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                data-id="gmvhmf6h"
                            >
                                <i
                                    className="fas fa-chart-bar text-accent text-lg"
                                    data-id="jo43jl96"
                                />
                            </div>
                            <h3 className="font-semibold text-lg mb-2" data-id="8mvlki7q">
                                Skill Assessment
                            </h3>
                            <p
                                className="text-secondary text-sm leading-relaxed"
                                data-id="ibjib8zn"
                            >
                                Evaluate technical skills across multiple software engineering
                                domains.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div
                            className="bg-card border border-subtle rounded-xl p-6 hover-lift fade-in delay-300"
                            data-id="trdgjizf"
                        >
                            <div
                                className="feature-icon w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                data-id="sq0bd2tw"
                            >
                                <i
                                    className="fas fa-lightbulb text-accent text-lg"
                                    data-id="cqj5wj61"
                                />
                            </div>
                            <h3 className="font-semibold text-lg mb-2" data-id="m4e11rg0">
                                Personalized Recommendations
                            </h3>
                            <p
                                className="text-secondary text-sm leading-relaxed"
                                data-id="czdy12u1"
                            >
                                Receive practical suggestions for improving your GitHub profile and
                                expanding your technical expertise.
                            </p>
                        </div>
                        {/* Card 4 */}
                        <div
                            className="bg-card border border-subtle rounded-xl p-6 hover-lift fade-in delay-400"
                            data-id="cuyugcfj"
                        >
                            <div
                                className="feature-icon w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                data-id="gphvba4a"
                            >
                                <i
                                    className="fas fa-users text-accent text-lg"
                                    data-id="0kj3fxg8"
                                />
                            </div>
                            <h3 className="font-semibold text-lg mb-2" data-id="1h2xvvbf">
                                Developer Matching
                            </h3>
                            <p
                                className="text-secondary text-sm leading-relaxed"
                                data-id="fo0aparg"
                            >
                                Discover developers with similar technical interests using machine
                                learning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* How It Works */}
            <section
                id="how-it-works"
                className="py-24 lg:py-32 bg-[#0A0C10]"
                data-id="8k9enxas"
            >
                <div className="max-w-4xl mx-auto px-6 lg:px-8" data-id="7v3pp537">
                    <div className="text-center mb-16 fade-in" data-id="jda3qj7y">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-id="swp33u4a">
                            How It Works
                        </h2>
                        <p className="text-secondary text-lg" data-id="jpsfvk12">
                            Get started in minutes with a simple four-step process.
                        </p>
                    </div>
                    <div className="relative" data-id="07aewlnm">
                        {/* Timeline Line */}
                        <div
                            className="absolute left-8 top-8 bottom-8 w-0.5 timeline-line hidden md:block"
                            data-id="5qb5p55u"
                        />
                        <div className="space-y-8" data-id="vc19vhj6">
                            {/* Step 1 */}
                            <div className="flex gap-6 fade-in delay-100" data-id="9vjunnst">
                                <div
                                    className="flex-shrink-0 w-16 h-16 rounded-full bg-card border border-subtle flex items-center justify-center relative z-10"
                                    data-id="ampcrwbe"
                                >
                                    <span
                                        className="text-2xl font-bold text-accent"
                                        data-id="qe2taqs2"
                                    >
                                        1
                                    </span>
                                </div>
                                <div className="flex-1 pt-3" data-id="fy5xknyd">
                                    <h3 className="font-semibold text-xl mb-2" data-id="p2wnp69m">
                                        Create Account
                                    </h3>
                                    <p className="text-secondary" data-id="vm7kzdrp">
                                        Sign up for free with your email address. No credit card
                                        required.
                                    </p>
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="flex gap-6 fade-in delay-200" data-id="pqorjmrx">
                                <div
                                    className="flex-shrink-0 w-16 h-16 rounded-full bg-card border border-subtle flex items-center justify-center relative z-10"
                                    data-id="aoe7avy7"
                                >
                                    <span
                                        className="text-2xl font-bold text-accent"
                                        data-id="g8zfstaw"
                                    >
                                        2
                                    </span>
                                </div>
                                <div className="flex-1 pt-3" data-id="arjeyvam">
                                    <h3 className="font-semibold text-xl mb-2" data-id="ymq3j3ir">
                                        Connect Your GitHub Username
                                    </h3>
                                    <p className="text-secondary" data-id="te6r9mci">
                                        Simply enter your GitHub username. We only access your public
                                        repositories.
                                    </p>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="flex gap-6 fade-in delay-300" data-id="j9xlvmlw">
                                <div
                                    className="flex-shrink-0 w-16 h-16 rounded-full bg-card border border-subtle flex items-center justify-center relative z-10"
                                    data-id="e2m76kyn"
                                >
                                    <span
                                        className="text-2xl font-bold text-accent"
                                        data-id="1bljydhp"
                                    >
                                        3
                                    </span>
                                </div>
                                <div className="flex-1 pt-3" data-id="bzew1xbz">
                                    <h3 className="font-semibold text-xl mb-2" data-id="a7uvxakd">
                                        Analyze Public Repositories
                                    </h3>
                                    <p className="text-secondary" data-id="cq4bi42s">
                                        Our AI processes your code, commits, and project structure to
                                        build your technical profile.
                                    </p>
                                </div>
                            </div>
                            {/* Step 4 */}
                            <div className="flex gap-6 fade-in delay-400" data-id="xnz6dnyq">
                                <div
                                    className="flex-shrink-0 w-16 h-16 rounded-full bg-card border border-subtle flex items-center justify-center relative z-10"
                                    data-id="0nlj16e9"
                                >
                                    <span
                                        className="text-2xl font-bold text-accent"
                                        data-id="0wen5ll5"
                                    >
                                        4
                                    </span>
                                </div>
                                <div className="flex-1 pt-3" data-id="yz4xifh2">
                                    <h3 className="font-semibold text-xl mb-2" data-id="q4ymhhz0">
                                        View Your Personalized Developer Profile
                                    </h3>
                                    <p className="text-secondary" data-id="8y6jfvqm">
                                        Explore your insights, discover improvement opportunities, and
                                        connect with similar developers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why DevDNA */}
            <section className="py-24 lg:py-32" data-id="p3iu59j2">
                <div className="max-w-7xl mx-auto px-6 lg:px-8" data-id="5yyur7vm">
                    <div className="text-center mb-16 fade-in" data-id="k82pgt1b">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-id="p874k19e">
                            Why DevDNA
                        </h2>
                        <p
                            className="text-secondary text-lg max-w-2xl mx-auto"
                            data-id="faml4p7y"
                        >
                            Built for developers who want meaningful insights, not just numbers.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6" data-id="7izgw157">
                        {/* Benefit 1 */}
                        <div
                            className="bg-card border border-subtle rounded-xl p-8 fade-in delay-100"
                            data-id="vyi09ibe"
                        >
                            <div
                                className="w-10 h-10 rounded-lg bg-[#0D1117] border border-subtle flex items-center justify-center mb-4"
                                data-id="dx0eolif"
                            >
                                <i className="fas fa-user-check text-accent" data-id="b3ywt402" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2" data-id="drpq2544">
                                Understand your current technical profile
                            </h3>
                            <p
                                className="text-secondary text-sm leading-relaxed"
                                data-id="45gmwviy"
                            >
                                Get a clear picture of where you stand today across different
                                technologies and domains.
                            </p>
                        </div>
                        {/* Benefit 2 */}
                        <div
                            className="bg-card border border-subtle rounded-xl p-8 fade-in delay-200"
                            data-id="a2vio73b"
                        >
                            <div
                                className="w-10 h-10 rounded-lg bg-[#0D1117] border border-subtle flex items-center justify-center mb-4"
                                data-id="q6edi8wx"
                            >
                                <i className="fas fa-bullseye text-accent" data-id="kplmyat1" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2" data-id="rnjeld3l">
                                Identify missing skills for your target career
                            </h3>
                            <p
                                className="text-secondary text-sm leading-relaxed"
                                data-id="7us9moxj"
                            >
                                See exactly what gaps exist between your current skills and your
                                desired role.
                            </p>
                        </div>
                        {/* Benefit 3 */}
                        <div
                            className="bg-card border border-subtle rounded-xl p-8 fade-in delay-300"
                            data-id="8wtap9z5"
                        >
                            <div
                                className="w-10 h-10 rounded-lg bg-[#0D1117] border border-subtle flex items-center justify-center mb-4"
                                data-id="oo9cq4n0"
                            >
                                <i
                                    className="fas fa-clipboard-list text-accent"
                                    data-id="l3vcj2a2"
                                />
                            </div>
                            <h3 className="font-semibold text-lg mb-2" data-id="noswh9em">
                                Receive structured improvement suggestions
                            </h3>
                            <p
                                className="text-secondary text-sm leading-relaxed"
                                data-id="916p8dc0"
                            >
                                Get actionable recommendations prioritized by impact and relevance
                                to your goals.
                            </p>
                        </div>
                        {/* Benefit 4 */}
                        <div
                            className="bg-card border border-subtle rounded-xl p-8 fade-in delay-400"
                            data-id="i3psiip8"
                        >
                            <div
                                className="w-10 h-10 rounded-lg bg-[#0D1117] border border-subtle flex items-center justify-center mb-4"
                                data-id="cpo7wwxz"
                            >
                                <i className="fas fa-chart-line text-accent" data-id="xw1i0377" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2" data-id="hctfh6u9">
                                Track your professional growth over time
                            </h3>
                            <p
                                className="text-secondary text-sm leading-relaxed"
                                data-id="i146gbfe"
                            >
                                Monitor your progress as you learn new technologies and contribute
                                to more projects.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Section */}
            <section
                id="about"
                className="py-24 lg:py-32 bg-[#0A0C10]"
                data-id="4hdpi2dw"
            >
                <div
                    className="max-w-3xl mx-auto px-6 lg:px-8 text-center fade-in"
                    data-id="4mh1ada3"
                >
                    <div
                        className="w-16 h-16 rounded-2xl bg-card border border-subtle flex items-center justify-center mx-auto mb-8"
                        data-id="sheugs9q"
                    >
                        <i className="fas fa-dna text-accent text-2xl" data-id="tgnl8itw" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-id="buu5ze6f">
                        Built for Meaningful Insights
                    </h2>
                    <p
                        className="text-secondary text-lg leading-relaxed mb-6"
                        data-id="bmr7h47n"
                    >
                        DevDNA is designed to help developers better understand their technical
                        profile through meaningful GitHub analysis.
                    </p>
                    <p className="text-secondary leading-relaxed" data-id="txzdvrj1">
                        Rather than simply displaying repository statistics, the platform
                        focuses on providing structured insights that help developers identify
                        strengths, discover improvement opportunities, and make informed
                        learning decisions. We believe that understanding your technical DNA is
                        the first step toward becoming the developer you want to be.
                    </p>
                </div>
            </section>
            {/* Final CTA */}
            <section className="py-24 lg:py-32" data-id="0qskv8mv">
                <div
                    className="max-w-4xl mx-auto px-6 lg:px-8 text-center fade-in"
                    data-id="qflso6o6"
                >
                    <h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
                        data-id="30s85ahj"
                    >
                        Ready to understand your GitHub profile?
                    </h2>
                    <p
                        className="text-secondary text-lg mb-8 max-w-2xl mx-auto"
                        data-id="d2hmimjj"
                    >
                        Create your free account and start your developer journey. No credit
                        card required.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-id="2gjgownv"
                    >
                        <Link
                            to="/SignUp"
                            className="btn-primary px-8 py-3 rounded-lg text-white font-medium"
                            data-id="g9blfhsk"
                        >
                            Create Account
                        </Link>
                        <Link
                            to="SignIn"
                            className="btn-secondary border px-8 py-3 rounded-lg text-white font-medium"
                            data-id="2o7qbu5d"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="py-12 border-t border-subtle" data-id="sdpzt8x7">
                <div className="max-w-7xl mx-auto px-6 lg:px-8" data-id="wrf186q5">
                    <div className="grid md:grid-cols-4 gap-8 mb-12" data-id="mdbxivnc">
                        {/* Brand */}
                        <div className="md:col-span-2" data-id="uv76emuv">
                            <a
                                href="#"
                                className="flex items-center gap-2 mb-4"
                                data-id="0l3c2y7e"
                            >
                                <div
                                    className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center"
                                    data-id="zys31iva"
                                >
                                    <i
                                        className="fas fa-code text-white text-sm"
                                        data-id="ftqn43w1"
                                    />
                                </div>
                                <span
                                    className="font-semibold text-lg text-white"
                                    data-id="xjeqs4gp"
                                >
                                    DevDNA
                                </span>
                            </a>
                            <p className="text-secondary text-sm max-w-sm" data-id="6ou46cl4">
                                AI-powered GitHub profile analysis for developers who want to
                                understand their technical strengths and grow their careers.
                            </p>
                        </div>
                        {/* Navigation */}
                        <div data-id="biv9ql0m">
                            <h4 className="font-semibold text-sm mb-4" data-id="bj0egy5l">
                                Product
                            </h4>
                            <ul className="space-y-3" data-id="1whmiutr">
                                <li data-id="h20l5jsk">
                                    <a
                                        href="#features"
                                        className="text-secondary hover:text-white transition-colors text-sm"
                                        data-id="jywetzje"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li data-id="eelqdd1q">
                                    <a
                                        href="#how-it-works"
                                        className="text-secondary hover:text-white transition-colors text-sm"
                                        data-id="2wken91s"
                                    >
                                        How It Works
                                    </a>
                                </li>
                                <li data-id="swmv6lyc">
                                    <a
                                        href="#about"
                                        className="text-secondary hover:text-white transition-colors text-sm"
                                        data-id="8pcxt1zm"
                                    >
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Company */}
                        <div data-id="qpsnu9r0">
                            <h4 className="font-semibold text-sm mb-4" data-id="q3mmo1wl">
                                Company
                            </h4>
                            <ul className="space-y-3" data-id="8p2hgt6o">
                                
                                <li data-id="shdtofvu">
                                    <a
                                        href="#"
                                        className="text-secondary hover:text-white transition-colors text-sm"
                                        data-id="ylhydr25"
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li data-id="0ano86p4">
                                    <a
                                        href="#"
                                        className="text-secondary hover:text-white transition-colors text-sm"
                                        data-id="0rc6jsql"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li data-id="vs0ftcix">
                                    <a
                                        href="#"
                                        className="text-secondary hover:text-white transition-colors text-sm"
                                        data-id="hyun1ifu"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="pt-8 border-t border-subtle flex flex-col md:flex-row justify-between items-center gap-4"
                        data-id="5d9s962o"
                    >
                        <p className="text-secondary text-sm" data-id="1m94m5dy">
                            © 2026 DevDNA. All rights reserved.
                        </p>
                        <div className="flex gap-6" data-id="s3xmcsun">
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default landingPage
