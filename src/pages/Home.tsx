import React from "react";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import Main from "../components/home/Main";

const Home: React.FC = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
}

export default Home;