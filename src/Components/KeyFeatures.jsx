import './keyFeatures.css'
import KeyFeaturesCard from './KeyFeaturesCard';
import KeyFeaturesCardsec from './KeyFeaturesCard2';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const KeyFeatures=()=>{


    useEffect(()=>{
        Aos.init();
    },[])

    const cardData=[
        {title:'WORLDWIDE DISTRIBUTION',
         text:'WILLING TO HEARD GLOBALLY? WELL, NOW ITS QUICK AND REWARDING TO SHARE YOUR MUSIC ACROSS 150+ DIGITAL PLATFORMS.',
         src:'../src/Images/world.png',
         backgroundColor:'white'
        },
        {
            title:'TRANSPARENT ROYALTY REPORTS',
            text:'WE PROVIDE YOU DETAILED ROYALTIES REPORTS WE COLLECT FROM DSPS DIRECTLY INTO YOUR DASHBOARDS.',
            src:'../src/Images/report.png',
            backgroundColor:'#C32879'  
        },
        {
            title:'YOUTUBE MONETISATION',
            text:'WITH YOUTUBE SOUND RECORDING SERVICE, YOU CAN EARN REVENUE ANY TIME YOUR SONGS ARE USED IN VIDEOS ACROSS YOUTUBE.',
            src:'../src/Images/youtube.png',
            backgroundColor:'white'  
        },
        {
            title:'FREE UPC &       ISRC CODES',
            text:'EACH MUSIC THAT YOU UPLOAD IS ALLOCATED A UNIQUE CODE NAMED ISRC AND UPC CODES. WE WILL PROVIDE YOU FOR FREE!!!',
            src:'../src/Images/upscCode.png',
            backgroundColor:'#F8663D',
            marginBottom:'2rem'  
        },
        {
            title:'SMART LINKS',
            text:'WE PROVIDE YOU WITH SMART-LINKS THAT SIMPLIFIES YOUR ONLINE MUSIC DISTRIBUTION JOURNEY.',
            src:'../src/Images/smartLink.png',
            backgroundColor:'white'  
        },
        {
            title:'DEDICATED SUPPORT TEAM',
            text:'MANAGE YOUR MUSIC RIGHTS AND EARN REVENUE THAT GUARANTEES A REAL TRACKING OF YOUR MUSIC',
            src:'../src/Images/world.png',
            backgroundColor:'#DC286D'  
        }
    ]




    const cardData2=[
        {title:'FINGER PRINTING',
         text:'THIS UNIQUE METADATA MADE IT POSSIBLE TO IDENTIFY AND RETRIEVE THE SONG FROM MILLIONS OF DATABASES.',
         src:'../src/Images/world.png',
         backgroundColor:'#DC286D'
        },
        {
            title:'SOCIAL MEDIA MONETISATION',
            text:'YOUR TARGET MARKET IS ALREADY OUT THERE WITH AN ESTIMATED 3.6 BILLION INDIVIDUALS GLOBALLY UTILISING SOCIAL MEDIA EVERYDAY. MONETIZE YOUR SOCIAL MEDIA NOW.',
            src:'../src/Images/socialMedia.png',
            backgroundColor:'white'  
        },
        {
            title:'SECURE USER & ROLE MANAGEMENT',
            text:'PROTECT YOUR LEADING IDENTITY AND ACCESS MANAGEMENT SOLUTION WITH A FRICTIONLESS EXPERIENCE. GET THE SUPPORT YOU NEED.',
            src:'../src/Images/youtube.png',
            backgroundColor:'#F26B11'  
        },
        {
            title:'TV & RADIO PROMOTION',
            text:'PROTECT YOUR LEADING IDENTITY AND ACCESS MANAGEMENT SOLUTION WITH A FRICTIONLESS EXPERIENCE. GET THE SUPPORT YOU NEED.',
            src:'../src/Images/tv.png',
            backgroundColor:'white',
            marginBottom:'2rem'  
        },
        {
            title:'COPYRIGHT',
            text:'FEEL COMFORTABLE WITH AN EXCLUSIVE RIGHT TO YOUR OWN MUSIC & PROTECT YOUR COMPOSITIONS. YOU WANT TO HAVE THE COPYRIGHT OF YOUR OWN MUSIC? YOU GOT IT !',
            src:'../src/Images/smartLink.png',
            backgroundColor:'#C32879'  
        },
        {
            title:'PLAYLIST PROMOTION',
            text:'WE SHARE YOUR MUSIC ORGANICALLY ON TARGETED PLAYLISTS WITH A HIGHER NUMBER OF LISTENERS.',
            src:'../src/Images/playlist.png',
            backgroundColor:'white'  
        }
    ]

    return (
        <div data-aos="fade-up">
            <center>
                <h1 className='key-features-h1'>KEY FEATURES</h1>
            </center>
            <div className='d-flex key-features-card'>
            {
            cardData.map((card, index) => (
        <KeyFeaturesCard
          key={index}
          title={card.title}
          text={card.text}
          src={card.src}
          backgroundColor={card.backgroundColor}
          marginBottom={card.marginBottom}

        />
        ))}
            </div>



        <div className='d-flex key-features-card2'>
            {
            cardData2.map((card, index) => (
        <KeyFeaturesCardsec
          key={index}
          title={card.title}
          text={card.text}
          src={card.src}
          backgroundColor={card.backgroundColor}
          marginBottom={card.marginBottom}

        />
        ))}
        </div>

            
        </div>
    )
}

export default KeyFeatures;