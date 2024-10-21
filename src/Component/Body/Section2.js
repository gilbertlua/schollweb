import { FeatureData } from "../../Data/FeatureData"
import "./Sections.css"


export const Section2 = () =>{
    const cardData = FeatureData();
    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
    };
    
    return(
        <div className="sections section2">
            <div className="row mb-3">
                <h3 className='text-center'style={{padding:'0'}}>Fitur Platform</h3>
            </div>
            <div className="row">
                {cardData.map((item, index) => (
                    <div className="col text-center">
                        <div className="card" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text" style={{color:'grey'}} >{truncateText(item.paragraph, 20)}</p>
                                <a href={item.href} className="btn btn-dark">Detail</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}