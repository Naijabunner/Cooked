import icon1 from "../../assets/brficon.png"
import icon2 from "../../assets/lunchIC.png"
import icon3 from "../../assets/Dinner.png"
import icon4 from "../../assets/dessert.png"
import icon5 from "../../assets/qbicon.png"
const Pallet = () => {
    return (
    <div className="pallet bg-blue-200 sm:flex-row flex-col flex rounded-lg mt-5 sm:justify-between justify-center items-center sm:items-end min-h-fit p-4 relative ">
        <div id="pallet_content" className=" flex flex-col justify-between  bottom-0 text-md mb-7 sm:mb-0">
            <button className="explore_btn mb-2">
                Explore
            </button>
            <h2 className="mb-2">OUR DIVERSE <br /> PALLETE</h2>
            <p className="mb-2">If you are a breakfast enthusiast, a connoisseur of savory delights, or <br />on the lookout for irresistible desserts, our curated selection has <br /> something to satisfy every palate.</p>
            <button className="mb-7 sm:mb-0 mt-5 border border-black rounded-full w-fit py-2 px-5 ">
                SEE MORE
            </button>
        </div>
        <div id="pallet_menu">
                <ul className=" pallet_ul justify-between">
                    <li>
                        <img src={icon1} alt="breakfast" width={30}/>
                        <p className=" text-sm">BREAKFAST</p>
                    </li>
                    <li>
                        <img src={icon2} alt="" width={30}/>
                        <p className=" text-sm">LUNCH</p>
                    </li>
                    <li>
                        <img src={icon3} alt="" width={30}/>
                        <p className=" text-sm">DINNER</p>
                    </li>
                    <li>
                        <img src={icon4} alt="" width={30}/>
                        <p className=" text-sm">DESSERT</p>
                    </li>
                    <li>
                        <img src={icon5} alt="" width={30}/>
                        <p className=" text-sm">QUICK BITE!</p>
                    </li>
                </ul>
        </div>
    </div>
    );
}
 
export default Pallet;