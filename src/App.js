import { Footer } from "./Component/Body/Footer";
import { Section1 } from "./Component/Body/Section1";
import { Section2 } from "./Component/Body/Section2";
import { Section3 } from "./Component/Body/Section3";
import { Section4 } from "./Component/Body/Section4";
import { NavbarTop } from "./Component/NavbarTop/NavbarTop";
import { useEffect } from "react";


function App() {
  
  useEffect(() => {
    // Check if the script is already added to avoid duplication
    if (!window.Tawk_API) {
      var Tawk_API = Tawk_API || {};
      var Tawk_LoadStart = new Date();

      // Create and configure the Tawk.to script
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://embed.tawk.to/671b175a2480f5b4f593989f/1ib0t6epv";
      script.setAttribute("crossorigin", "*");

      // Add the script to the body
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <div className="container ">
        <NavbarTop/>
        <div className="container">
          <Section1/><hr/>
          <Section2/><hr/>
          <Section3/><hr/>
          <Section4/>
        </div>        
        {/* <div className='border' style={{height:'1000px'}}></div> */}
      </div>
      <Footer/>
    </>        
  );
}

export default App;
