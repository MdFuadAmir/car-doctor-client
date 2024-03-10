import { FaCalendarAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
const Address = () => {
    return (
        <div className="bg-gray-900 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 py-12 text-white gap-6">
            {/* 1 */}
            <div className="flex space-x-5 items-center font-bold">
                <div className="text-3xl">
                    <FaCalendarAlt></FaCalendarAlt>
                </div>
                <div className="space-y-3">
                    <h3>We are open monday-friday</h3>
                    <h2 className="text-2xl">7:00 am - 9:00 pm</h2>
                </div>
            </div>
            {/* 2 */}
            <div className="flex space-x-5 items-center font-bold">
                <div className="text-3xl">
                    <IoCall></IoCall>
                </div>
                <div className="space-y-3">
                    <h3>Have a question?</h3>
                    <h2 className="text-2xl">+2546 251 2658</h2>
                </div>
            </div>
            {/* 3 */}
            <div className="flex space-x-5 items-center font-bold">
                <div className="text-3xl">
                    <IoLocationSharp></IoLocationSharp>
                </div>
                <div className="space-y-3">
                    <h3>Need a repair? our address</h3>
                    <h2 className="text-2xl">Liza Street, New York</h2>
                </div>
            </div>

            
            
        </div>
    );
};

export default Address;