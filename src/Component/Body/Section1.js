import { Section1Data} from "../../Data/Section1Data"
import "./Sections.css"


export const Section1 = () =>{
    const section1Data = Section1Data();
    return(
        <div className="sections section1 mt-5" id="go-section1">
            <div className="row  section1-component">
                <div className="col-sm-6 ">
                    <div className="row">
                        <h4 style={{padding:'0'}}>
                            {section1Data.title}
                        </h4>
                    </div>
                    <div className="row">
                        
                            {section1Data.paragraph}
                        
                    </div>
                    <br/>
                    <div className="row">
                        <button className="sch-btn ">
                            Kunjungi
                        </button>
                    </div>
                </div>
                <div className="col-sm-6 ">
                    <div className="justify-content-end">
                        <img style={{width:'100%'}}src="./landingpage/landing.png" alt='landing page'/>
                    </div> 
                </div>
            </div>
        </div>
    )
}