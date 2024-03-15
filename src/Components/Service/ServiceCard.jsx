import { FaArrowRight } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id,img,title,price} = service;

    return (
        <div className="card card-compact bg-base-700 rounded-lg shadow-2xl">
    <img src={img} alt="service image"  className="m-6 rounded-xl  h-full"/>
  <div className="px-6 pb-4 space-y-2">
    <h2 className="text-2xl font-bold">{title}</h2>
    <div className="flex justify-between items-center text-red-500">
    <p className="text-lg font-bold">Price : ${price}</p>
    <div className="bg-gray-100 p-2 rounded-full">
      <Link to={`/book/${_id}`}><FaArrowRight></FaArrowRight></Link>
    </div>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;
ServiceCard.propTypes ={
    service: PropTypes.object.isRequired
}