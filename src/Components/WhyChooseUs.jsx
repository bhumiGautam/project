import './whyChooseUs.css'
import Button from 'react-bootstrap/Button';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
const whyChooseUs=()=>{

    useEffect(()=>{
        Aos.init();
    },[])

    return (
        <div className="why-choose-us" data-aos="fade-up">
            <center>
            <h1 className="why-choose-us-h1">WHY CHOOSE US</h1>
            <h2 className="why-choose-us-h2">REACH</h2>
            <p>Publish your music on more than 150+ digital platforms and gain your aspired coverage.</p>
            <h2 className="why-choose-us-h2">ROYALTY</h2>
            <p>You will get your royalties straight into your accounts with 100% of your rights.</p>
            <h2 className="why-choose-us-h2">RECOGNITION</h2>
            <p>You can establish your music in a competent and emerging market with our exceptional marketing and promotional strategies.</p>
            <Button variant="primary" className='why-choose-us-btn'>Sign Up Now</Button>{' '}
            </center>

        </div>
        
    );
}

export default whyChooseUs;