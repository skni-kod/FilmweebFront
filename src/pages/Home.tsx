import React, { useEffect, useState } from "react";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import Main from "../components/home/Main";
import MobileBar from "components/navigation/MobileBar";

const Home: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>();
  const handleResize = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Header />
      <Main />
      {screenWidth && screenWidth < 765 ? <MobileBar /> : null}
      <Footer />
    </>
  );
};

export default Home;
