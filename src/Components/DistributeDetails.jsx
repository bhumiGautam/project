import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUserShield ,faCertificate,faWallet,faCirclePlay,faCloudArrowUp,faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import DistributeDetailsCard from './DistributeDetailsCard.jsx'
import './DistributeDetails.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
const DistributeDetails=()=>{

    useEffect(()=>{
        Aos.init();
    },[])

    const data=[
        {
            desc:'Have Complete Right for your Music. And get paid each time it is streamed on a platform',
            title:'Own Your Music',
            icon:faUserShield

        },
        {
            desc:'Pay nothing for your music, and release your music on iTunes, Apple Music, Amazon and more.',
            title:'Exclusively Free Service',
            icon:faCertificate

        },
        {
            desc:'Release your music across the world. Let your fans speak each time time when your music is out.',
            title:'Release Your Music',
            icon:faCirclePlay

        }
]



const data2=[
    {
        desc:"Here's your chance to upload your music quickly and release it worldwide. Apple Music,Spotify,iTunes,Amazon and 100+ digital stores for your track to keep playing.",
        title:'Upload Your Music',
        icon:faCloudArrowUp

    },
    {
        desc:'Why wait when you already have your masterpiece? Start selling your music. We release your music worldwide.More stores and streaming services than you have ever heard of.',
        title:'We Release Worldwide',
        icon:faEarthAmerica

    },
    {
        desc:'Begin your music career here. Sell your music and get paid every time your music is played. All you have to do is upload your track and we have got it from there.',
        title:'You Get Paid',
        icon:faWallet

    }
]
    return (
        <div data-aos="fade-up" style={{borderTop:'1px solid black',padding:'4rem'}}>
            <div className='d-flex distribute-details-div'>
            {/* <FontAwesomeIcon icon={faUserShield} style={{ color: '#ed4a4f',height:'8rem' }} /> */}
            
            {
            data.map((card, index) => (
                <DistributeDetailsCard  
                key={index}
                title={card.title}
                desc={card.desc}
                icon={card.icon}
                />
            ))}

            </div>

            <div className='d-flex distribute-details-div2 mt-5 '>
            {   
            data2.map((card, index) => (
                <DistributeDetailsCard  
                key={index}
                title={card.title}
                desc={card.desc}
                icon={card.icon}
                />
            ))}

            </div>
            <center>
                <Button variant="primary" className='fs-5 mb-2'>Distribute Now For Free</Button>{' '}
                <p className='mb-5'>No joining fee. No CC required</p>
            </center>
            
            
        
        </div>
        
    )
}
export default DistributeDetails;