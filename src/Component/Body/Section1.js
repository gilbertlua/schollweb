import { Section1Data} from "../../Data/Section1Data"
import { MetaData} from "../../Data/MetaData"
import "./Sections.css"


export const Section1 = () =>{
    const section1Data = Section1Data();
    const metaData = MetaData();
    return(
        <div className="row sections section1">
            <div className="col-sm-7">
                <h3 className="nama-web">{metaData.namaWeb}</h3>
                <h3>{section1Data.title}</h3>
                <hr/>
                <br/>
                <p>
                    {section1Data.paragraph}
                </p>
            </div>
            <div className="col-sm-5 section1-right">
                <img className="section1-image" src="./landingpage/schollblue.webp" alt="section1-image"/>
            </div>
        </div>
    )
}