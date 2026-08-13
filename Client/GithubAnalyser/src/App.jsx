import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage.jsx";
import SignIn from "./pages/signIn.jsx";
import SignUp from "./pages/signUp.jsx";
import DashBoard from "./pages/dashBoard.jsx";

const App = () => {
  return (
    <Routes>
      <Route path = "/" element = {<LandingPage />}/>
      <Route path = "/SignIn" element = {<SignIn />}/>
      <Route path = "/SignUp" element = {<SignUp />}/>
      <Route path = "/DashBoard" element = {<DashBoard />}/>
    </Routes>
  )
}

export default App
