import React, { useState, useEffect } from "react";
import NavComponent from "./components/Navigation/NavComponent";
import HeroComponent from "./components/Hero/HeroComponent";
import ImageComponent from "./components/ImageComp/ImageComponent";
import FeaturedComponent from "./components/Featured/FeaturedComponent";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import "./App.css";
import { Grid } from "semantic-ui-react";
import SideBarComponent from "./components/Sidebar/SideBarComponent";

function App() {
  const [nasaData, setNasaData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  //     .then(res => {
  //       const nasaImg = res.data;
  //       const nasaData = res.data;
  //       console.log(nasaData);
  //       setNasaData(nasaImg);
  //     });
  // }, []);
  if (!nasaData) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <div>
        <Grid celled>
          <NavComponent />
          <Grid.Row>
            <Grid.Column width={3}>
              <ImageComponent img={nasaData.url} />
              <ImageComponent img={nasaData.url} />
            </Grid.Column>

            <Grid.Column width={13}>
              <HeroComponent img={nasaData.url} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={10}>
              <FeaturedComponent
                date={nasaData.date}
                explanation={nasaData.explanation}
              />
            </Grid.Column>
            <Grid.Column width={6}>
              <SideBarComponent date={nasaData.date} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default App;
