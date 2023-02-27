import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const Home = lazy(() => import("./pages/Home"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Movie = lazy(() => import("./pages/Movie"));
const Login = lazy(() => import("./pages/Login"));

root.render(
    <React.StrictMode>
        <div id={"container"}>
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="movie">
                        <Route path=":id" element={<Movie />} />
                        <Route index element={<PageNotFound />} />
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
        </div>
    </React.StrictMode>
);
