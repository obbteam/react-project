import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigation} from "./components/Navigation";
import {CardsPage} from "./pages/CardsPage";
import {AdminPage} from "./pages/AdminPage";
import {Route, Routes} from "react-router-dom";
import {MyAlert} from "./components/MyAlert";
import {LoginContext} from "./context/loginContext";

function App() {
    const {isLoggedIn, alert} = useContext(LoginContext)

    return (
        <>
            <Navigation/>
            {isLoggedIn && <MyAlert myMessage={alert}></MyAlert>}
            <Routes>
                <Route path="/" element={<CardsPage/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
            </Routes>
        </>
    )
}

export default App;
