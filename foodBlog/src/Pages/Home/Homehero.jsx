
const HomeHeroComponent = () => {
    return ( 
    <div id="home" className=" z-[ -1] img  rounded-lg flex text-center justify-center content-center  relative w-screen ">
        <div id="hero_content" className=" absolute top-20">
            <h1 className=" text-3xl text-white">UNLEASH CULINARY <br /> EXCELLENCE</h1>
            <p className="text-sm text-white ">Explore a world of flavors, discover <br /> handcrafted recipes, and let the aroma of <br /> our passion for cooking fill your kitchen</p>
       <button className=" bg-orange-400 rounded-full p-2 mt-5">
        EXPLORE RECIPES
       </button>
        </div>
    </div>
    );
}
 
export default HomeHeroComponent;