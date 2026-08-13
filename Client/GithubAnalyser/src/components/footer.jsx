import React from 'react'

const footer = () => {
    return (
        <>
            <footer className="border-t border-zinc-800 bg-[#0B1120] py-12 mt-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                        DevDNA
                    </h2>

                    <p className="mt-4 max-w-2xl mx-auto text-zinc-400 leading-7 text-base">
                        Platform that analyzes GitHub
                        repositories, evaluates technical skills, and delivers personalized
                        career insights.
                    </p>

                    <div className="mt-8 h-px w-24 bg-zinc-700 mx-auto"></div>

                    <p className="mt-6 text-sm text-zinc-500">
                        © 2026 DevDNA • Version 1.0.0
                    </p>
                </div>
            </footer></>
    )
}

export default footer
