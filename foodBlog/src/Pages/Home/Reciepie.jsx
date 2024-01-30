import imgOne from  "/src/assets/Recipe Image (1).jpg"
const FeaturedRecipes = () => {
    return (  
        <section className="border border-stone-300 rounded-3xl pt-3 px-2 pb-2 mt-5 z-10 relative background">
            <h2 className="font-bold text-2xl mb-5">
                FEATURED RECIPIES
            </h2>
            <div className="flex flex-col justify-evenly items-center md:flex-row ">

           
            <div className=" bg-white rounded-3xl md:max-w-[50vw] mt-4 p-2 m-2">
                <div className="">
                    <img src={imgOne} alt="" className=" w-full" />
                    <h3 className=" font-extrabold  text-2xl px-3 py-1">Savory Herb-Infused Chicken</h3>
                    <p className="text-xl px-3 pt-2 pb-10 ">
                        Indulge in the rich and savory symphony of flavours  with our Savory Herb-Infused Chicken
                    </p>
                    <div className="btm_details flex items-center justify-between flex-wrap">
                        <p className="px-3">40 MIN - EASY PREP -3 SERVES</p>
                        <button className="mb-7 sm:mb-0 mt-5 border border-black rounded-full w-fit py-2 px-5 mx-5">VIEW RECIPE</button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-3xl md:max-w-[50vw] mt-4 p-2 m-2">
                <div className="">
                <img src={imgOne} alt="" className=" w-full" />
                    <h3 className=" font-extrabold  text-2xl px-3 py-1">Savory Herb-Infused Chicken</h3>
                    <p className="text-xl px-3 pt-2 pb-10 ">
                        Indulge in the rich and savory symphony of flavours  with our Savory Herb-Infused Chicken
                    </p>
                    <div className="btm_details flex items-center justify-between flex-wrap">
                        <p className="px-3">40 MIN - EASY PREP -3 SERVES</p>
                        <button className="mb-7 sm:mb-0 mt-5 border border-black rounded-full w-fit py-2 px-5 mx-5">VIEW RECIPE</button>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}
 
export default FeaturedRecipes;