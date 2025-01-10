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
            <Menu></Menu>
            <Special></Special>
            <Event></Event>
            <About></About>
            <Faq></Faq>
        </div>
    );
}

export default Home;
