import './UploadMusic.css'
import Button from 'react-bootstrap/Button';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
const UploadMusic=()=>{
    useEffect(()=>{
        Aos.init();
    },[])
    return (
         <div className='upload-music-div' data-aos="fade-up">
            <center>
                <h1 className='upload-music-h1'>Upload Your <span id='upload-music-span'> Music </span> From AnyWhere, To Any Platform</h1>
                <p className='upload-music-p'>Streaming, Downloads,Youtube Monetisation,Publishing. Anything from here. you earn your money and we'll earn you a name</p>
                <Button variant="primary" className='fs-5 mt-5 mb-3'>Join Now For Free</Button>{' '}
                <p >No joining fee. No CC required</p>
            </center>
        </div>
    )
}
export default UploadMusic;