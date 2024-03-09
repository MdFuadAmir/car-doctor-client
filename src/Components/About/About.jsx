import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
            <div className="hero h-fit">
  <div className="hero-content flex-col lg:flex-row">
    <div className="lg:w-1/2 relative">
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
    </div>
    <div className="lg:w-1/2 space-y-5 mt-6 md:mt-4">
        <h3 className="text-red-500 font-bold text-xl">About Us</h3>
      <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
      <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
      <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
      <button className="btn bg-red-500 border-none text-white">Get More Info</button>
    </div>
  </div>
</div>
            
     
    );
};

export default About;