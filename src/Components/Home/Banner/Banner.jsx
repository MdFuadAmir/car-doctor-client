import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
import img5 from "../../../assets/images/banner/5.jpg"
import img6 from "../../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[80vh] rounded-lg">
            {/* 1 */}
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
    <div className="absolute flex h-full items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-transparent p-4">
     <div className="text-xl space-y-5 text-white pl-4">
        <h2 className="text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <div className="space-x-4">
            <button className="btn bg-red-600 text-white border-none">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
        </div>
     </div>
    </div>
    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end bottom-0">
      <a href="#slide6" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
            {/* 2 */}
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex h-full items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-transparent p-4">
     <div className="text-xl space-y-5 text-white pl-4">
        <h2 className="text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <div className="space-x-4">
            <button className="btn bg-red-600 text-white border-none">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
        </div>
     </div>
    </div>
    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
            {/* 3 */}
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex h-full items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-transparent p-4">
     <div className="text-xl space-y-5 text-white pl-4">
        <h2 className="text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <div className="space-x-4">
            <button className="btn bg-red-600 text-white border-none">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
        </div>
     </div>
    </div>
    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
            {/* 4 */}
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex h-full items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-transparent p-4">
     <div className="text-xl space-y-5 text-white pl-4">
        <h2 className="text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <div className="space-x-4">
            <button className="btn bg-red-600 text-white border-none">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
        </div>
     </div>
    </div>
    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div> 
            {/* 5 */}
  <div id="slide5" className="carousel-item relative w-full">
    <img src={img5} className="w-full" />
    <div className="absolute flex h-full items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-transparent p-4">
     <div className="text-xl space-y-5 text-white pl-4">
        <h2 className="text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <div className="space-x-4">
            <button className="btn bg-red-600 text-white border-none">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
        </div>
     </div>
    </div>
    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div> 
            {/* 6 */}
  <div id="slide6" className="carousel-item relative w-full">
    <img src={img6} className="w-full" />
    <div className="absolute flex h-full items-center left-0 right-0 bg-gradient-to-r from-[#151515] to-transparent p-4">
     <div className="text-xl space-y-5 text-white pl-4">
        <h2 className="text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
        <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <div className="space-x-4">
            <button className="btn bg-red-600 text-white border-none">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
        </div>
     </div>
    </div>
    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end bottom-0">
      <a href="#slide5" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 

 
 
</div>
    );
};

export default Banner;