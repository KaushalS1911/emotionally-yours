import './App.css'
import Navbar from "./components/global/navbar.jsx";
import Footer from "./components/global/footer.jsx";
import {Route, Routes} from "react-router-dom";
import Psychologicals from "./pages/psychological/psychologicals.jsx";
import Home from "./pages/home.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/home" exact element={<Home/>} />
                <Route path="/" exact element={<Psychologicals/>} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App
