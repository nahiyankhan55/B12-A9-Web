import { useContext } from "react";
import WebContext from "../../../context/WebContext";
import HeaderSlider from "./HeaderSlider";
import TopPlants from "./TopPlants";
import PlantCareTips from "./PlantCareTips";
import GreenExperts from "./GreenExperts";
import EcoDecorIdeas from "./EcoDecorIdeas";
import PlantOfTheWeek from "./PlantOfTheWeek";

const HomePage = () => {
  const { loader } = useContext(WebContext);
  console.log(loader);

  return (
    <div className="flex flex-col w-full">
      <HeaderSlider></HeaderSlider>
      <TopPlants></TopPlants>
      <PlantCareTips></PlantCareTips>
      <GreenExperts></GreenExperts>
      <EcoDecorIdeas></EcoDecorIdeas>
      <PlantOfTheWeek></PlantOfTheWeek>
    </div>
  );
};

export default HomePage;
