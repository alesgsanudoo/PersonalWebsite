import * as React from 'react';
import {Navigate, Route, Routes} from "react-router-dom"
import Maintenance from "./Pages/Maintenance/Maintenance";


/**
 * App component
 *
 * This component sets up the routing for the application.
 * It renders different pages based on the current URL path and applies the selected theme.
 *
 * Right now is using maintenance, while I am working on it.
 *
 * @returns {JSX.Element} The rendered app component.
 */

function App() {
    return (
        <div style={{background: 'black', minHeight: '100vh'}} >
            <Routes>
                <Route exact path={"/"} element={<Maintenance/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </div>
    );
}

export default App