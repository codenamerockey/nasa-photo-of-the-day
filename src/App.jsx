import React, { useState, useEffect } from "react";
import NavComponent from "./components/Navigation/NavComponent";
import HeroComponent from "./components/Hero/HeroComponent";
import ImageComponent from "./components/ImageComp/ImageComponent";
import FeaturedComponent from "./components/Featured/FeaturedComponent";
import axios from "axios";
import "./App.css";
import SideBarComponent from "./components/Sidebar/SideBarComponent";

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        const nasaImg = res.data;
        const nasaData = res.data;
        console.log(nasaData);
        setNasaData(nasaImg);
      });
  }, []);
  if (!nasaData) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <div className="App">
        <HeroComponent img={nasaData.url} />

        <ImageComponent img={nasaData.url} />
        <ImageComponent img={nasaData.url} />
        <ImageComponent img={nasaData.url} />
        <NavComponent />
        <FeaturedComponent
          date={nasaData.date}
          explanation={nasaData.explanation}
        />

        <SideBarComponent />
      </div>
    );
  }
}

export default App;
