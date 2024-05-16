import MusicLogos from "./MusicLogos";
import './MusicDistributionGlobally.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect , useState} from "react";
import Button from 'react-bootstrap/Button';
const MusicDistributionGlobally =()=>{

    useEffect(()=>{
        Aos.init();
    },[])

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth >= 1365); // Adjust the threshold as needed
      };
  
      handleResize(); // Call it initially
  
      window.addEventListener('resize', handleResize); // Listen to window resize events
  
      return () => {
        window.removeEventListener('resize', handleResize); // Clean up the listener
      };
    }, []);

    const images=["../src/Images/Amazon.png",
        "../src/Images/appleMusicLogo.png",
        "../src/Images/Deezer.png",
       "../src/Images/GooglePlay.png",
        "../src/Images/Spotify.png",
        "../src/Images/Tindal.png",
        "../src/Images/youtube_music.png",
        "../src/Images/Resso.png"];
    return (
        <div data-aos="fade-up">
        <center>
        <h1 className="music-distribution-h1">Music<span className="music-distribution-span"> Distribution </span>Globally</h1>
        <p className="fs-5 mb-4">A universal technology marvel in the global music distribution landscape, you can now distribute your tracks across 150+ leading digital platforms. While you keep ownership of your master rights and monitor the developments through our transparent & user-friendly dashboard enabling robust content management, as well as marketing and financial tools.</p>
        { isMobile &&<MusicLogos images={images} />}
        <Button variant="primary" className="sign-up-btn">Sign Up Now</Button>{' '}
        </center>
        </div>

    )
}

export default MusicDistributionGlobally;