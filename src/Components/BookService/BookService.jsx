import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const BookService = () => {
    const service = useLoaderData();
    const {title,_id} = service;
    const {user} = useContext(AuthContext);

    const handleBookedOrder = event =>{
      event.preventDefault();
      const form = event.target;
      const fName = form.fName.value;
      const lName = form.lName.value;
      const phone = form.phone.value;
      const email = form.email.value;

      const order = {
        customerId: _id,
        customerTitle: title,
        customerFName: fName,
        customerLName: lName,
        customerPhone: phone,
        customerEmail: email,
      }
      console.log(order);
      fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(order)

      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
    }
    return (
        <div>
            <div className="bg-gray-100 rounded-lg px-4 md:px-12 py-4 md:py-12 max-w-6xl mx-auto">
             <form onSubmit={handleBookedOrder} className="card-body">
              <h2 className="text-center font-bold text-2xl mb-6">Book this Service: {title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <input type="text" name="fName" placeholder="First name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="text" name="lName" placeholder="Last name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="number" name="phone" placeholder="Your Phone" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="email" name="email" defaultValue={user?.email} placeholder="Your email" className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control mt-6">
          <textarea className="textarea min-h-36" placeholder="Your Massage"></textarea>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811] text-white font-bold text-lg">Order Confirm</button>
        </div>
      </form>
            </div>
        </div>
    );
};

export default BookService;