import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            {/* headers */}
            <div className="space-y-4">
            <h3 className="text-red-500 font-bold text-xl mx-auto w-fit">Services</h3>
            <h3 className="font-bold text-4xl mx-auto w-fit">Our Service Area</h3>
            <p className="mx-auto max-w-3xl text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. </p>
            </div>
            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                {
                    services.map(service => <ServiceCard 
                        key={service._id} 
                        service={service}

                    ></ServiceCard>)
                }
            </div>
            <div className="text-center mt-8">
            <button className="btn btn-outline text-red-500">More Services</button>
            </div>
            
        </div>
    );
};

export default Service;