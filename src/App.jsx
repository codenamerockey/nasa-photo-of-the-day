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

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
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

export default App;
