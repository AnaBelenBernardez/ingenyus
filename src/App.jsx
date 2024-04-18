import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Biology from './pages/Biology';
import Physics from './pages/Physics';
import Chemistry from './pages/Chemistry';
import Mathematics from './pages/Mathematics';
import ComputerScience from './pages/ComputerScience';
import Medicine from './pages/Medicine';
import './App.css';
import Header from './components/Header';
import PageTitle from './components/PageTitle';
import ScrollBar from './components/ScrollBar';

function App() {
    return (
        <div className='App'>
            <PageTitle />
            <Header />
            <ScrollBar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='biology' element={<Biology />} />
                <Route path='physics' element={<Physics />} />
                <Route path='chemistry' element={<Chemistry />} />
                <Route path='mathematics' element={<Mathematics />} />
                <Route path='computer-science' element={<ComputerScience />} />
                <Route path='medicine' element={<Medicine />} />
                <Route path='*' element={<div>404 Not Found</div>} />
            </Routes>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
