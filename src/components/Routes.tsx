import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './Utilities/Loader';

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));

const Rota = () => {
    return (
        <React.Suspense fallback={ <Loader/>}>
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="sobre/" element={<About />} />
                    <Route path='*' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    )
}

export default Rota;