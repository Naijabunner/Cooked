import HomeHeroComponent from "./Homehero";
import Pallet from "./Mealpalette";
import FeaturedRecipes from "./Reciepie";
const Home = () => {
    return (<> <div className="wrapper">
        
    <HomeHeroComponent/>
    <Pallet/>
    <FeaturedRecipes/>
    </div>
    </> );
}
 
export default Home;