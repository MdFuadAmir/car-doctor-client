import { useLoaderData } from "react-router-dom";


const BookService = () => {
    const service = useLoaderData();
    const {title,price,_id} = service;
    return (
        <div>
            <div className="bg-gray-100 rounded-lg px-4 md:px-12 py-4 md:py-12 max-w-6xl mx-auto">
             <form className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <input type="email" placeholder="First name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="password" placeholder="Last name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="email" placeholder="Your Phone" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="password" placeholder="Your email" className="input input-bordered" required />
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