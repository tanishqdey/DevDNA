import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const signIn = () => {

    const [gUserName, SetgUserName] = useState("");
    const [password, SetPassword] = useState("");
    const [notification, SetNotification] = useState("");
    const [showPass, SetShowPass] = useState(false);
    const navigate = useNavigate();

    async function signIn(e) {
        e.preventDefault();
        const API_URL = import.meta.env.VITE_BACKEND_URL;
        const res = await fetch(`${API_URL}/api/auth/signIn`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                gUserName: gUserName,
                password: password
            })
        })
        const data = await res.json()
        //console.log(data)
        //console.log(data.data.token)
        const token = localStorage.setItem("token",data.data.token)

        if(res.ok){
            navigate(`/DashBoard`)
        }
    }

    return (
        <>
            <meta charSet="UTF-8" data-id="tmyveyyc" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
                data-id="i9z7wgy8"
            />
            <title data-id="opv14tw8">DevDNA | Sign In</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                data-id="gu95s0c4"
            />
            <style
                data-id="t1y5tfiq"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n    \n    body {\n      font-family: 'Inter', sans-serif;\n      background-color: #0a0a0a;\n      color: #f5f5f5;\n      overflow-x: hidden;\n    }\n    \n    .glass-card {\n      backdrop-filter: blur(16px) saturate(180%);\n      -webkit-backdrop-filter: blur(16px) saturate(180%);\n      background-color: rgba(26, 26, 26, 0.65);\n      border-radius: 12px;\n      border: 1px solid rgba(255, 255, 255, 0.08);\n    }\n    \n    .gradient-text {\n      background: linear-gradient(90deg, #0ec5cf 0%, #3947da 100%);\n      -webkit-background-clip: text;\n      background-clip: text;\n      color: transparent;\n    }\n    \n    .metallic-button {\n      background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);\n      border: 1px solid rgba(255,255,255,0.1);\n      box-shadow: 0 8px 32px rgba(127, 0, 255, 0.25);\n      position: relative;\n      overflow: hidden;\n    }\n    \n    .metallic-button::before {\n      content: '';\n      position: absolute;\n      top: -50%;\n      left: -50%;\n      width: 200%;\n      height: 200%;\n      background: linear-gradient(\n        to bottom right,\n        rgba(255,255,255,0) 0%,\n        rgba(255,255,255,0.1) 50%,\n        rgba(255,255,255,0) 100%\n      );\n      transform: rotate(30deg);\n      transition: all 0.3s ease;\n    }\n    \n    .metallic-button:hover::before {\n      left: 100%;\n    }\n    \n    .input-field {\n      background-color: rgba(20, 20, 20, 0.5);\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      transition: all 0.3s ease;\n    }\n    \n    .input-field:focus {\n      border-color: #1154e4;\n      box-shadow: 0 0 0 3px rgba(127, 0, 255, 0.2);\n    }\n    \n    .input-field:hover {\n      border-color: rgba(255, 255, 255, 0.2);\n    }\n\n    .floating {\n      animation: floating 6s ease-in-out infinite;\n    }\n\n    @keyframes floating {\n      0% { transform: translateY(0px); }\n      50% { transform: translateY(-15px); }\n      100% { transform: translateY(0px); }\n    }\n\n    .pulse {\n      animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n    }\n\n    @keyframes pulse {\n      0%, 100% { opacity: 1; }\n      50% { opacity: 0.5; }\n    }\n  "
                }}
            />
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden" data-id="ffm3itap">
                <div
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#0d8e96] opacity-20 blur-3xl floating"
                    style={{ animationDelay: "0s" }}
                    data-id="f5buvozc"
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#0d8e96] opacity-20 blur-3xl floating"
                    style={{ animationDelay: "1s" }}
                    data-id="fsupsuek"
                />
                <div
                    className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-[#0d8e96] opacity-15 blur-2xl floating"
                    style={{ animationDelay: "2s" }}
                    data-id="yumk3vug"
                />
            </div>
            {/* Header */}

            <header className="py-6 px-6 md:px-12" data-id="843pq2hg">
                <div className="flex justify-between items-center" data-id="js6qvk99">
                    <Link
                        to="/"
                        className="text-2xl font-bold gradient-text z-20"
                        data-id="tahp250d"
                    >
                        DevDNA
                    </Link>
                    <Link
                        to="/"
                        className="text-gray-400 hover:text-white transition z-20"
                        data-id="uk3rk3w1"
                    >
                        <i className="fas fa-arrow-left mr-2" data-id="tf636pop" /> Back to Home
                    </Link>
                </div>
            </header>
            {/* Sign In Form */}
            <main
                className="flex items-center justify-center min-h-[calc(100vh-160px)] px-6"
                data-id="nckbm2uo"
            >
                <div
                    className="glass-card max-w-md w-full p-8 md:p-10 relative z-10 transform transition-all duration-500 hover:scale-[1.01]"
                    data-id="dgcxflf3"
                >
                    <div className="text-center mb-8" data-id="09ymjzyd">
                        <h1 className="text-3xl font-bold mb-2" data-id="wn99ulke">
                            Welcome Back to{" "}
                            <span className="gradient-text" data-id="0xfqgnwe">
                                DevDNA
                            </span>
                        </h1>
                        <p className="text-gray-400" data-id="wynnrvkq">
                            Continue your exclusive journey
                        </p>
                    </div>
                    <form className="space-y-6" data-id="6juwwvmf" onSubmit={signIn}>
                        <div data-id="0x1gnc91">
                            <label
                                htmlFor="userName"
                                className="block text-sm font-medium text-gray-300 mb-2"
                                data-id="knliomgk"
                            >
                                GitHub UserName
                            </label>
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                value={gUserName}
                                required
                                className="input-field w-full px-4 py-3 rounded-lg focus:outline-none text-white"
                                data-id="b41pj5nx"
                                onChange={e => { SetgUserName(e.target.value) }}
                            />
                        </div>
                        <div data-id="97sv4jpa">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-300 mb-2"
                                data-id="o20oew6i"
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
                                    data-id="7t9uinnm"
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
                            <div className="flex justify-end mt-2" data-id="4jyg0ab0">
                                <a
                                    href="/otp"
                                    className="text-xs text-indigo-400 hover:underline"
                                    data-id="o9nosp72"
                                >
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="metallic-button w-full px-6 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-xl pulse"
                            data-id="5zrw4tvv"
                        >
                            Sign In
                        </button>
                        {notification && (
                            <div className="bottom-15 left-1/2 md:ml-[2vw] transform-translate-x-1/2 z-50 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg text-sm font-bold animate-bounce w-fit md:w-[20vw] p-auto">
                                {notification}
                            </div>
                        )}
                        <div
                            className="relative flex items-center justify-center"
                            data-id="2tuksg5j"
                        >
                            <div
                                className="flex-grow border-t border-gray-700"
                                data-id="gj9szgsd"
                            />
                            <span
                                className="flex-shrink mx-4 text-gray-500 text-sm"
                                data-id="lksiuqoa"
                            >
                                or continue with
                            </span>
                            <div
                                className="flex-grow border-t border-gray-700"
                                data-id="lwbo7j1p"
                            />
                        </div>
                    </form>
                    <div
                        className="mt-6 text-center text-sm text-gray-400"
                        data-id="1tg83xdt"
                    >
                        New to NEXUS?{" "}
                        <a
                            href="/SignUp"
                            className="text-indigo-400 hover:underline"
                            data-id="gr5lel3l"
                        >
                            Create account
                        </a>
                    </div>
                </div>
            </main>
            {/* Footer */}
            <footer
                className="py-8 px-6 text-center text-gray-500 text-sm"
                data-id="00bc5nja"
            >
                <p data-id="401xg8mv">© 2025 NEXUS. All rights reserved.</p>
            </footer>
        </>
    )
}

export default signIn
