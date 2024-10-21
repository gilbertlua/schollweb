import { Section1 } from "./Component/Body/Section1";
import { Section2 } from "./Component/Body/Section2";
import { NavbarTop } from "./Component/NavbarTop/NavbarTop";

function App() {
  return (    
    <div className="container ">
      <NavbarTop/>
      <div className="container">
        <Section1/>
        <Section2/>
      </div>        

      {/* <div className='border' style={{height:'1000px'}}></div> */}
    </div>
  );
}

export default App;
