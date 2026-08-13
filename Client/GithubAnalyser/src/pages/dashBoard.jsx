import LoadingScreen from '../components/loading.jsx'
import Navbar from '../components/navbar.jsx'
import StatsGrid from '../components/statsGrid.jsx'
import RoleCompatibility from '../components/roleCompatibility.jsx'
import LanguageChart from '../components/languageChart.jsx'
import TechnologyArsenal from '../components/techArsenal.jsx'
import SIW from '../components/siw.jsx'
import Footer from "../components/footer.jsx"
import TechToLearn from "../components/techToLearn.jsx"
import initPDF from "../utils/exportPdf.js"
import { useNavigate } from 'react-router-dom'
import { useState , useEffect, useRef } from 'react'

const dashBoard = () => {
    const [loading,SetLoading] = useState(true)
    const [fetchedData,SetFetchedData] = useState({})
    const token = localStorage.getItem("token")

    useEffect(() => {
        async function fetchData() {
        const API_URL = import.meta.env.VITE_BACKEND_URL;
        const res = await fetch(`${API_URL}/api/fetch/gitHubData/myAnalysis`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Authorization : `Bearer ${token}`
            }
        })
        const data = await res.json()
        //console.log(data)
        SetLoading(false)
        SetFetchedData(data.data)
    }
    fetchData()
    },[])

    //console.log(fetchedData)

    if(loading){
        return <LoadingScreen />
    }

    
    return (
        <>
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
            <Navbar
            name = {fetchedData.gUserName}
            avatar = {fetchedData.avatarUrl}
            skillScores = {fetchedData.skillScores}
            onExport = {()=>{initPDF(fetchedData,gUserName)}}
            onAnalyseAgain = {()=> window.location.reload()} // refresh page 
            />
            <div className="m-5">
                <StatsGrid
                totalRepos = {fetchedData.totalRepos}
                originalRepos = {fetchedData.originalRepos}
                averageStars = {fetchedData.averageStars}
                withDesc = {fetchedData.withDesc}
                collabedProjects = {fetchedData.collabedProjects}
                popularProject = {fetchedData.popularProject}/>
                <RoleCompatibility
                skillScores = {fetchedData.skillScores}/>
                <LanguageChart
                languages = {fetchedData.langPercentages}/>
                <TechnologyArsenal
                knownTech = {fetchedData.knownTech}/>
                <SIW
                strengths = {fetchedData.strengths}
                intermediates = {fetchedData.intermediates}
                weaknesses = {fetchedData.weaknesses}/>
                <TechToLearn
                techToLearn = {fetchedData.techToLearn}/>
            </div>
            <Footer/>
        </>
    )
}

export default dashBoard
