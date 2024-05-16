import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopesBulk} from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; // Import your CSS file for styling

const FooterSec = ({ sections }) => {
  return (
    <footer className="footer">
      <div className="container">
        {sections.map((section, index) => (
          <div className="footer-section" key={index}>
            {/* Use JavaScript expressions or ternary operators */}
            {index === 0 && (
              <>
                <img src={section.image} alt="Image" className='logo-section' />
                <br />
                <FontAwesomeIcon icon={faFacebook} className='social-media-icons' />
                <FontAwesomeIcon icon={faInstagram} className='social-media-icons' />
                <FontAwesomeIcon icon={faYoutube}  className='social-media-icons'/>
                <FontAwesomeIcon icon={faLinkedin}  className='social-media-icons'/>
              </>
            )}
            {/* Condition for index 4 */}
            {index === 4 && (
             
              <>
                <h2 className='footer-h2'>{section.title}</h2>
                <span>ADDRESS:</span><br />
                <span>B 302, DAKHNER,</span><br />
                 <span> PARAIYA, GAYA (BIHAR)</span><br />
                <span> INDIA - 800011</span><br />
                <FontAwesomeIcon icon={faEnvelopesBulk} className='fs-5 mt-4 envl'  />
                <span className='fs-5 ml-3 '>contact@tvDistributions.com</span><br />
                <FontAwesomeIcon icon={faWhatsapp} className='fs-5 mt3 envl'  />
                <span className='fs-5'>7759887117</span>
              </>
            )}
            {/* Default case for other indices */}
            {index !== 0 && index !== 4 && section.items && Array.isArray(section.items) && (
              <>
                <h2 className='footer-h2'>{section.title}</h2>
                <ul className='footer-ul'>
                  {section.items.map((item, i) => (
                    <li key={i} className='footer-li'>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
        
      </div>
      <center>
            <p className='copyright-claim'>© 2023 Tv Distributions . All Right Reserved, A Tunevision Distribution Pvt. Ltd.</p>
        </center>
    </footer>
  );
};

export default FooterSec;
