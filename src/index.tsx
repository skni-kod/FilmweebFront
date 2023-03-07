import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Login from "pages/Login";
import ProviderCallback from "components/login/ProviderCallback";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const Home = lazy(() => import("./pages/Home"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Movie = lazy(() => import("./pages/Movie"));
const queryClient = new QueryClient();

root.render(
    <QueryClientProvider client={queryClient}>
        <React.StrictMode>
            <div id="container">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movie/:id" element={<Movie />} />
                        <Route path="login" element={<Login />} />
                        <Route path="login/github/callback" element={<ProviderCallback />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Router>
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </React.StrictMode>
    </QueryClientProvider>
);
