import "./Sections.css"
import { FaPhone, FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';

export const Section4 = () =>{

    return(
        <div className="sections section1 mt-5" id="go-section4">
            <div className="row  section1-component">
                <div className="row mb-4">
                    <h3 className='text-center'style={{padding:'0'}}>Kontak</h3>
                </div>
                <div className="col-sm-6 ">
                    <div className="row">
                        <h4 style={{padding:'0'}}>
                            Get in Touch with Us Today!
                        </h4>
                    </div>
                    <div className="row">
                        Hubungi kami untuk mendapatkan informasi lebih lanjut atau jika Anda memiliki pertanyaan seputar layanan yang kami tawarkan. Tim kami siap membantu Anda dengan cepat dan profesional. Jangan ragu untuk menghubungi kami melalui form di bawah ini atau langsung melalui kontak yang tersedia
                    </div>
                    <br/>
                </div>
                <div className="col-sm-6 ">
                    <div className="">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <FaPhone /> 
                            <a href="tel:+1234567890">+123 456 7890</a>
                        </li>
                        <li className="list-group-item">
                            <FaWhatsapp />
                            <a href="https://wa.me/1234567890">Chat via WhatsApp</a>
                        </li>
                        <li className="list-group-item">
                            <FaEnvelope />
                            <a href="mailto:example@email.com">example@email.com</a>
                        </li>
                        <li className="list-group-item">
                            <FaInstagram />
                            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            @yourprofile
                        </a>
                        </li>
                    </ul>
                    </div> 
                </div>
            </div>
        </div>
    )
}