import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const {signInUser} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = {email,password};
        console.log(newUser);
        // login user
        signInUser(email,password)
        .then(result =>{
          const user = result.user;
          console.log(user);
        })
        .then(error =>{
          console.log(error);
        })
    }
    return (
        <div className="hero my-12">
  <div className="flex md:flex-row flex-col-reverse gap-12 items-center w-full justify-center">
    <div>
      <img src={loginImg} alt="login Image" />
    </div>
    <div className="card shrink-0 w-full max-w-sm border py-4">
        <h2 className="w-fit mx-auto font-bold text-3xl">Login</h2>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-orange-600">Login</button>
        </div>
      </form>
        <div className="text-center space-y-3">
            <p>Or sign up with</p>
            <div className="flex justify-center ">
                <FaFacebookF className="text-blue-400 text-5xl bg-gray-200 m-2 p-3 rounded-full"></FaFacebookF>
                <FaLinkedinIn className="text-blue-400 text-5xl bg-gray-200 m-2 p-3 rounded-full"></FaLinkedinIn>
                <FcGoogle className="text-blue-400 text-5xl bg-gray-200 m-2 p-3 rounded-full"></FcGoogle>
            </div>
            <p>Do not have an account? <Link to="/signIn" className="text-orange-600 font-bold text-lg">Sign Up</Link> </p>
        </div>      
    </div>
  </div>
</div>
    );
};

export default Login;