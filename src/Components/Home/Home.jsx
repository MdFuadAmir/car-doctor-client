import About from "../About/About";
import Address from "../Address/Address";
import Footer from "../Footer/Footer";
import Service from "../Service/Service";
import Banner from "./Banner/Banner";



const Home = () => {
    return (
        <div className="space-y-24">
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Address></Address>
            <Footer></Footer>
        </div>
    );
};

export default Home;