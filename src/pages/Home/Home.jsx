import About from "../About/About";
import Banner from "./Banner";
import Event from "./Event";
import Faq from "./Faq";
import Menu from "./Menu";
import Special from "./Special";
import TopFood from "./TopFood";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopFood></TopFood>
            <div className="bg-[#a190d6] pb-6">
                <Menu></Menu>
            </div>
            <Special></Special>
            <Event></Event>
            <About></About>
            <Faq></Faq>
        </div>
    );
}

export default Home;
