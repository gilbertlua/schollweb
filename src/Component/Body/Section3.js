import Slider from "react-slick";
import "./Sections.css"
import { SliderData } from "../../Data/SliderData";


export const Section3 = () =>{
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const imgData = SliderData()
    
    return(
        <div className="sections section3" id="go-section3">
            <div className="row mb-3">
                <h3 className='text-center'style={{padding:'0'}}>Gallery</h3>
            </div>
            <div className="row">
                <div className="slider-container">
                    <Slider {...settings} className="">
                        {imgData.map((item,index) => 
                            <div key={index}>
                                <div className="">
                                    <img className="image-item" src={item.src} alt="gallery 1"/>
                                </div>
                            </div> 
                        )}   
                    </Slider>
                </div>
            </div>
        <br/>
        <br/>
        </div>
        
    )
}