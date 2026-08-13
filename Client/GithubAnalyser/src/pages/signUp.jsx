import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const signUp = () => {

    const [Name, SetName] = useState("");
    const [gUserName, SetgUserName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [showPass, SetShowPass] = useState(false);
    const navigate = useNavigate();

    async function signUp(e) {
        e.preventDefault() ;
        const API_URL = import.meta.env.VITE_BACKEND_URL;
        const res = await fetch(`${API_URL}/api/createUser/newUser`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name: Name,
                gUserName: gUserName,
                email: email,
                password: password
            })
        })

        const data = await res.json() ;
        //console.log(data)
        const token = localStorage.setItem("token",data.data.token)

        if(res.ok){
            navigate(`/DashBoard`)
        }
    }

    return (
        <>
            <meta charSet="UTF-8" data-id="ui2382ht" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
                data-id="v8vbiqf4"
            />
            <title data-id="l338wcns">DevDNA | Sign Up</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                data-id="vf9nfxj0"
            />
            <style
                data-id="pm33nf67"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n    \n    body {\n      font-family: 'Inter', sans-serif;\n      background-color: #0a0a0a;\n      color: #f5f5f5;\n      overflow-x: hidden;\n    }\n    \n    .glass-card {\n      backdrop-filter: blur(16px) saturate(180%);\n      -webkit-backdrop-filter: blur(16px) saturate(180%);\n      background-color: rgba(26, 26, 26, 0.65);\n      border-radius: 12px;\n      border: 1px solid rgba(255, 255, 255, 0.08);\n    }\n    \n    .gradient-text {\n      background: linear-gradient(90deg, #0ec5cf 0%, #3947da 100%);\n      -webkit-background-clip: text;\n      background-clip: text;\n      color: transparent;\n    }\n    \n    .metallic-button {\n      background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);\n      border: 1px solid rgba(255,255,255,0.1);\n      box-shadow: 0 8px 32px rgba(127, 0, 255, 0.25);\n      position: relative;\n      overflow: hidden;\n    }\n    \n    .metallic-button::before {\n      content: '';\n      position: absolute;\n      top: -50%;\n      left: -50%;\n      width: 200%;\n      height: 200%;\n      background: linear-gradient(\n        to bottom right,\n        rgba(255,255,255,0) 0%,\n        rgba(255,255,255,0.1) 50%,\n        rgba(255,255,255,0) 100%\n      );\n      transform: rotate(30deg);\n      transition: all 0.3s ease;\n    }\n    \n    .metallic-button:hover::before {\n      left: 100%;\n    }\n    \n    .input-field {\n      background-color: rgba(20, 20, 20, 0.5);\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      transition: all 0.3s ease;\n    }\n    \n    .input-field:focus {\n      border-color: #1154e4;\n      box-shadow: 0 0 0 3px rgba(127, 0, 255, 0.2);\n    }\n    \n    .input-field:hover {\n      border-color: rgba(255, 255, 255, 0.2);\n    }\n  "
                }}
            />
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden" data-id="ehpz0y2t">
                <div
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#0d8e96] opacity-20 blur-3xl"
                    data-id="udcikz5d"
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#0d8e96] opacity-20 blur-3xl"
                    data-id="j52jofmx"
                />
            </div>
            {/* Header */}

            <header className="py-6 px-6 md:px-12" data-id="ly7yuba9">
                <div className="flex justify-between items-center" data-id="728v2h2k">
                    <Link
                        to="/"
                        className="text-2xl font-bold gradient-text z-20"
                        data-id="5vrk1sl9"
                    >
                        DevDNA
                    </Link>
                    <Link
                        to="/"
                        className="text-gray-400 hover:text-white transition z-20"
                        data-id="19fsu17e"
                    >
                        <i className="fas fa-arrow-left mr-2" data-id="ysqij0ad" /> Back to Home
                    </Link>
                </div>
            </header>
            {/* Sign Up Form */}
            <main
                className="flex items-center justify-center min-h-[calc(100vh-160px)] px-6"
                data-id="oln9freu"
            >
                <div
                    className="glass-card max-w-md w-full p-8 md:p-10 relative z-10"
                    data-id="fcxq31nv"
                >
                    <div className="text-center mb-8" data-id="ub8eaw07">
                        <h1 className="text-3xl font-bold mb-2" data-id="q7ilys8g">
                            See Your{" "}
                            <span className="gradient-text" data-id="31w0q0gy">
                                DevDNA
                            </span>
                        </h1>
                        <p className="text-gray-400" data-id="j3794sxy">
                            Join DevDNA , Unlock smarter GitHub insights
                        </p>
                    </div>
                    <form className="space-y-6" data-id="1pppqe6b" onSubmit={signUp}>
                        <div data-id="u1z4zw5z">
                            <label
                                htmlFor="fullName"
                                className="block text-sm font-medium text-gray-300 mb-2"
                                data-id="rnsogi8l"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={Name}
                                required
                                className="input-field w-full px-4 py-3 rounded-lg focus:outline-none text-white"
                                data-id="2qd3s78m"
                                onChange={e => { SetName(e.target.value) }}
                            />
                        </div>
                        <div data-id="qh0649dj">
                            <label
                                htmlFor="userName"
                                className="block text-sm font-medium text-gray-300 mb-2"
                                data-id="af03xjgy"
                            >
                                GitHub Username
                            </label>
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                value={gUserName}
                                required
                                className="input-field w-full px-4 py-3 rounded-lg focus:outline-none text-white"
                                data-id="kopgmzyd"
                                onChange={e => { SetgUserName(e.target.value) }}
                            />
                        </div>
                        <div data-id="pirtvqaj">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-300 mb-2"
                                data-id="4iqnhj90"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                required
                                className="input-field w-full px-4 py-3 rounded-lg focus:outline-none text-white"
                                data-id="j5gbm745"
                                onChange={e => { SetEmail(e.target.value) }}
                            />
                        </div>
                        <div data-id="qewpl2wp">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-300 mb-2"
                                data-id="je5s2e46"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPass ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={password}
                                    required
                                    className="input-field w-full px-4 py-3 rounded-lg focus:outline-none text-white"
                                    data-id="l3w9hn6u"
                                    onChange={e => { SetPassword(e.target.value) }}
                                />
                                <button
                                    type="button"
                                    onClick={() => SetShowPass(!showPass)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                                >
                                    {showPass ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <p className="mt-2 text-xs text-gray-500" data-id="iqg16d7f">
                                Minimum 8 characters with at least one number and special character
                            </p>
                        </div>
                        <div className="flex items-center" data-id="8j8exgkj">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 rounded bg-gray-800 border-gray-700 text-indigo-600 focus:ring-indigo-500"
                                data-id="b4mu7lzw"
                            />
                            <label
                                htmlFor="terms"
                                className="ml-2 block text-sm text-gray-400"
                                data-id="gafjlr2b"
                            >
                                I agree to the{" "}
                                <a
                                    href="#"
                                    className="text-indigo-400 hover:underline"
                                    data-id="l3z0lux7"
                                >
                                    Terms
                                </a>{" "}
                                and{" "}
                                <a
                                    href="#"
                                    className="text-indigo-400 hover:underline"
                                    data-id="gcq12enz"
                                >
                                    Privacy Policy
                                </a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="metallic-button w-full px-6 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-xl"
                            data-id="md7qi4ey"
                        >
                            Create Account
                        </button>
                    </form>
                    <div
                        className="mt-6 text-center text-sm text-gray-400"
                        data-id="mscusob6"
                    >
                        Already have an account?{" "}
                        <a
                            href="/SignIn"
                            className="text-indigo-400 hover:underline"
                            data-id="dl7lrm76"
                        >
                            Sign in
                        </a>
                    </div>
                </div>
            </main>
            {/* Footer */}
            <footer
                className="py-8 px-6 text-center text-gray-500 text-sm"
                data-id="n5ad4c2d"
            >
                <p data-id="lnfgdxv1">© 2025 NEXUS. All rights reserved.</p>
            </footer>
        </>
    )
}

export default signUp
