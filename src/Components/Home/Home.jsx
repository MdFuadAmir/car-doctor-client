import About from "../About/About";
import Address from "../Address/Address";
import Service from "../Service/Service";
import Banner from "./Banner/Banner";



const Home = () => {
    return (
        <div className="space-y-24">
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Address></Address>

        </div>
    );
};

export default Home;