import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actor from "./pages/Actor";
import PageNotFound from "./pages/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const queryClient = new QueryClient();

root.render(
    <QueryClientProvider client={queryClient}>
        <React.StrictMode>
            <div id="container">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movie/:id" element={<Movie />} />
                        <Route path="/actor/:id" element={<Actor />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Router>
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </React.StrictMode>
    </QueryClientProvider>
);
