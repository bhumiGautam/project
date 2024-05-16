import React, { useState } from "react";
import "./navbar.css";
import image from "./logo.png";



const Navbar = () => {
  return (
    <>
    <nav>
			<div class="navigation-main-div">
				<div>
						<img src={image} id="logo-image" />
				</div>
				<div class="navigation-mobile-div">
				<ul class="nav justify-content-center">
		  			<li class="nav-item sell-your-music-a">
		    			<a class="nav-link active " aria-current="page" href="index.html">Sell Your Music</a>
		  			</li>
		  			<li>
		  			<div class="dropdown">
	  					<a href="" class="dropbtn">
	  					Services			
	  				</a>
	  						<div class="dropdown-content">
	    						<a href="rights.html">Rights Management</a>
	   							 <a href="#">Youtube Monetization</a>
	   							 <a href="#">Music Publishing</a>
	   							 <a href="#">Digital Distribution</a>
	   							 <a href="#">Our Technologies For Labels/Artists</a>
	  						</div>
					</div>
		  			</li>
		  			<li class="nav-item">
		    			<a class="nav-link" href="pricing.html">Pricing</a>
		  			</li>
		  			<li class="nav-item">
		    			<a class="nav-link" href="musicDistribution.html">Music Distribution</a>
		  			</li>
		  			<li class="nav-item">
		    			<a class="nav-link" href="aboutus.html" >About Us</a>
		  			</li>
		  			<li class="nav-item">
		    			<a class="nav-link" href="login.html">Login</a>
		  			</li>
				</ul>
				
				</div>
            </div>

        </nav>
   
    </>
  );
};

export default Navbar;