import { useState,useEffect } from 'react'
import './App.css'
import logo from './Components/logo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar.jsx'
import ControlledCarousel from './Components/ImageSlider.jsx'
import MusicDistributionGlobally from './Components/MusicDistributionGlobally.jsx';
import KeyFeatures from './Components/KeyFeatures.jsx';
import WhyChooseUs from './Components/WhyChooseUs.jsx';
import DistributeDetails from './Components/DistributeDetails.jsx';
import UploadMusic from './Components/UploadMusic.jsx'
import PreLoader from './Components/PreLoader.jsx';
import SuccessStory from './Components/SuccessStory.jsx';
import Footer from "./Components/FooterSec.jsx";
import MobileNavbar from './Components/MobileNavbar.jsx';

function App() {
  // const images=[{src:'./hands.jpg',title:"sell music",description:'hello',color:'red'},{src:'crowd.jpg',title:'sell music',description:'hii',color:'blue'},{src:'vinly.jpg',title:'sell music',description:'hello'}];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of your main content
    setTimeout(() => {
      setLoading(false);
    }, 6000); // Adjust time as needed
  }, []);

  const footerSections = [
    { image: logo },
    { title: 'SERVICES', items: ['SELL YOUR MUSIC', 'SERVICES', 'PRICING','MUSIC DISTRIBUTION','ABOUT US ','LOGIN'] },
    { title: 'LINKS', items: ['CREATE YOUR ACCOUNT', 'CONTACT US', 'TERMS AND CONDITION','FAQS','PRIVACY & POLICY'] },
    { title: 'COMMUNITY', items: ['BLOG', 'FACEBOOK', 'INSTAGRAM','YOUTUBE'] },
    { title: 'CONTACT US',items:[] },
  ];



  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 984); // Adjust the threshold as needed
    };

    handleResize(); // Call it initially

    window.addEventListener('resize', handleResize); // Listen to window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the listener
    };
  }, []);


  return (
    <>
    {loading ? (
        <PreLoader />
      ) : (
      <div>
        {isMobile ? <MobileNavbar /> : <Navbar />}
    <ControlledCarousel />
    <MusicDistributionGlobally />
    <DistributeDetails />
    <WhyChooseUs />
    <KeyFeatures />
    <UploadMusic />
    <SuccessStory />
    <Footer sections={footerSections} />
    </div>
      )}
    </>
  )
}

export default App
