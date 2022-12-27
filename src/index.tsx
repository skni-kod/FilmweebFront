import React, {lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const Home = lazy(() => import('./pages/Home'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

root.render(
    <React.StrictMode>
        <div id={"container"}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </Router>
        </div>
    </React.StrictMode>
);