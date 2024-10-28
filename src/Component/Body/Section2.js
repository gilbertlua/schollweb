import { FeatureData } from "../../Data/FeatureData"
import "./Sections.css"


export const Section2 = () =>{
    const cardData = FeatureData();
    const truncateText = (text, charLimit) => {
        return text.length > charLimit ? text.slice(0, charLimit) + '...' : text;
    };
    
    return(
        <div className="sections section2" id="go-section2">
            <div className="row mb-3">
                <h3 className='text-center'style={{padding:'0'}}>Fitur Platform</h3>
            </div>
            <div className="row">
                {cardData.map((item, index) => (
                    <div className="col text-center" key={index}>
                        <div className="card custom-card" >
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text" style={{color:'grey'}} >{truncateText(item.paragraph, 109)}</p>
                                <a href={item.href} className="btn btn-dark">Detail</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}