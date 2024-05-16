import './sucessStory.css'
import Button from 'react-bootstrap/Button';
import image from "./logo.png";
const SuccessStory=()=>{
    return(
        <div className="sucess-story">
        <div className='content'>
            <center>
                <h1 className='sucess-h1'>CREATE YOUR OWN SUCESS STORY</h1>
                <img src={image} alt="logo" className='sucess-logo' />
                <br />
                <Button variant="primary" className='fs-5 mt-5 mb-3 join-now-btn'>Join Now For Free</Button>{' '}
            </center>
        </div>
        </div>
    )
}

export default SuccessStory;