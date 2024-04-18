import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Biology from './pages/Biology';
import Physics from './pages/Physics';
import Chemistry from './pages/Chemistry';
import Mathematics from './pages/Mathematics';
import ComputerScience from './pages/ComputerScience';
import Medicine from './pages/Medicine';
import '../src/css/base/_globals.css';
import { Contact_Newsletter } from './components/Contact&Newsletter/Contact&Newsletter';
import Header from './components/Header';
import PageTitle from './components/PageTitle';

function App() {
    return (
        <>
            <PageTitle />
            <Header />
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
            <Contact_Newsletter />
        </>
    );
}

export default App;
