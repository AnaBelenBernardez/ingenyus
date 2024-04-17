import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Biology from './pages/Biology';
import Physics from './pages/Physics';
import Chemistry from './pages/Chemistry';
import Mathematics from './pages/Mathematics';
import ComputerScience from './pages/ComputerScience';
import Medicine from './pages/Medicine';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Router>
                <div>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='biology' element={<Biology />}></Route>
                        <Route path='physics' element={<Physics />}></Route>
                        <Route path='chemistry' element={<Chemistry />}></Route>
                        <Route
                            path='mathematics'
                            element={<Mathematics />}
                        ></Route>
                        <Route
                            path='computer-science'
                            element={<ComputerScience />}
                        ></Route>
                        <Route path='medicine' element={<Medicine />}></Route>
                        <Route
                            path='*'
                            element={<div>404 Not Found</div>}
                        ></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
