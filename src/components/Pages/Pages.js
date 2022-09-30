import { Route,Routes } from "react-router"
import HomePage from "../HomePage/HomePage"
import Contact from "../ContactBtn/ContactBtn"


const Pages = () =>{

    return <Routes>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path={"/"} element={<HomePage/>}></Route>
    </Routes>
}

export default Pages