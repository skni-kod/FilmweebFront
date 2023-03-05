import React from "react";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import Main from "../components/actor/Main";

const Actor: React.FC = () => {
    //const {id} = useParams();

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default Actor;
