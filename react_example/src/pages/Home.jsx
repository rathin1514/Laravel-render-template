import Banner from "../components/Banner";
import Workouts from "../components/Workouts";
import Trainer from "../components/Trainer";
import Recipes from "../components/Recipes";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home(){
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Workouts></Workouts>
      <Trainer></Trainer>
      <Recipes></Recipes>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  );
}

export default Home;