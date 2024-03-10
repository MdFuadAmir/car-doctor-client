import About from "../About/About";
import Service from "../Service/Service";
import Banner from "./Banner/Banner";



const Home = () => {
    return (
        <div className="space-y-24">
            <Banner></Banner>
            <About></About>
            <Service></Service>

        </div>
    );
};

export default Home;