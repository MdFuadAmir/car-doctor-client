import logo from "../../assets/icons/logo.svg"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-900">
  <aside>
    <img src={logo} alt="" className="w-16"/>
    <p className="max-w-sm">Edwin Diaz is a software and <br /> web technologies engineer, <br /> a life coach trainer who is also a serial .</p>
  </aside> 
  <nav>
    <h6 className="footer-title">About</h6> 
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Service</a>
    <a className="link link-hover">Contact</a>

  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">Why car Doctor</a>
    <a className="link link-hover">About</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Support</h6> 
    <a className="link link-hover">Support center</a>
    <a className="link link-hover">Feedback</a>
    <a className="link link-hover">Accesbility</a>
  </nav>
</footer>
    );
};

export default Footer;