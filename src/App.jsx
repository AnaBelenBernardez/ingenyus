import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Biology from './pages/Biology';
import Physics from './pages/Physics';
import Chemistry from './pages/Chemistry';
import Mathematics from './pages/Mathematics';
import ComputerScience from './pages/ComputerScience';
import Medicine from './pages/Medicine';
import './index.css';
import PageTitle from './components/PageTitle';
import { ErrorPage } from './pages/ErrorPage';
import ScrollBar from './components/Scrollbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <>
            <PageTitle />
            <ScrollBar />
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/biology' element={<Biology />} />
                <Route path='/physics' element={<Physics />} />
                <Route path='/chemistry' element={<Chemistry />} />
                <Route path='/mathematics' element={<Mathematics />} />
                <Route path='/computer-science' element={<ComputerScience />} />
                <Route path='/medicine' element={<Medicine />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <ScrollToTop />
        </>
    );
}

export default App;
