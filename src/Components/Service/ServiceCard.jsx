import { FaArrowRight } from "react-icons/fa";
import PropTypes from 'prop-types';


const ServiceCard = ({service}) => {
    const {img,title,price} = service;

    return (
        <div className="card card-compact bg-base-700 rounded-lg shadow-2xl">
    <img src={img} alt="service image"  className="m-6 rounded-xl  h-full"/>
  <div className="px-6 pb-4 space-y-2">
    <h2 className="text-2xl font-bold">{title}</h2>
    <div className="flex justify-between items-center text-red-500">
    <p className="text-lg font-bold">Price : ${price}</p>
    <FaArrowRight></FaArrowRight>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;
ServiceCard.propTypes ={
    service: PropTypes.object.isRequired
}