import React from 'react';
import {MDBCarousel, MDBCarouselInner } from 'mdbreact';
import Header from '../Header/Header';
import Banner from '../Components/Banner/Salon-Banner'
import Bnrimg1 from '../Assets/bnr1.jpg'
import Bnrimg2 from '../Assets/bnr2.jpg'
import Bnrimg3 from '../Assets/bnr3.jpg'

 
const Home = ()=>{
    const bnrImgArray = [Bnrimg1, Bnrimg2, Bnrimg3];
    return(
        <div>
            <Header />

            <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
            >
                <MDBCarouselInner>
                    <Banner bnrimage = {bnrImgArray} />
                </MDBCarouselInner>
            </MDBCarousel>
            
        </div>
    )
}

export default Home;