import  ColouredLogo from "../assets/logoC.jpg";
const NabarComponent = () => {
    return (  <>
    <nav className=" flex_center_sapceBtn py-2 px-5 border-solid border border-stone-300 rounded-full mb-3 ">
        <div id="logo" className="px-2 flex place-content-between text-center">
            <img src={ColouredLogo} alt="logo" className="m-w-20"/>
            <span className=" ml-1 text-sm">Cooks <br /> Delight</span>
        </div>
        <ul id="navItems" className="navItem min-w-10 hidden sm:flex ">
            <li>HOME</li>
            <li>RECIPES</li>
            <li>COOKING TIPS</li>
            <li>ABOUT US</li>
        </ul>
        <div id="other_btn" className="hidden sm:flex place-content-between text-center px-4">
            <p className="px-2">search icon</p>
            <button>Subscribe</button>
        </div>
        <button id="nav_btn" className="block sm:hidden">
        &#9776;
        </button>
    </nav>
    </>);
}
 
export default NabarComponent;