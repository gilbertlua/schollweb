import "./Footer.css"
import { MetaData } from "../../Data/MetaData"
import { NavbarData } from "../../Data/NavbarData";

export const Footer = () =>{
    const metaData = MetaData()
    const navbarData = NavbarData()
    return(
        <div className="footer-custom mt-5">
            <div className="container">
                <div className="row">
                    <div className="row mb-4 mt-3 ">
                        <h3 className='text-center'style={{padding:'0',color:'white'}}>{metaData.namaWeb}</h3>
                    </div>
                    <div className="col-sm-6 ">
                        <div className="row">
                            <h4 style={{padding:'0', color:'white'}}>
                                Let’s Meet Up!
                            </h4>
                        </div>
                        <div className="row" style={{color:"white"}}>
                            {metaData.alamat}                            
                        </div>
                        <br/>
                        <div className="row">
                            <div className="maps">
                            <iframe 
                                src={metaData.maps} 
                                width="290" 
                                height="290" 
                                style={{border:'0'}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade" 
                                title="Location Map" // Add title attribute here
                                ></iframe>

                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col-sm-6 ">
                        <div className="row">
                            <ul className="list-group ">
                                {navbarData.map((item,index)=>    
                                    <li className="list-group-item list-group-item-action"key={index}>
                                        <a href={item.href}>
                                            {item.title}
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}