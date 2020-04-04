import React from 'react';
import { MDBCarousel, MDBCarouselInner } from 'mdbreact';
import Header from '../../Header/Header';
import Banner from '../../Banner/Salon-Banner'
import Bnrimg1 from '../../../Assets/bnr1.jpg'
import Bnrimg2 from '../../../Assets/bnr2.jpg'
import Bnrimg3 from '../../../Assets/bnr3.jpg'
import Service from '../../../Assets/service.jpg'
import Service1 from '../../../Assets/service1.jpg'
import Service2 from '../../../Assets/service2.jpg'
import Service3 from '../../../Assets/service3.jpg'
import Service4 from '../../../Assets/service.jpg'
import Service5 from '../../../Assets/service1.jpg'
import Service6 from '../../../Assets/service2.jpg'
import Service7 from '../../../Assets/service3.jpg'
import Homeservices from '../Home/Services';


const Home = () => {
    const homeServiceImg = [Service,Service1, Service2, Service3, Service4,Service5, Service6, Service7];
    const bnrImgArray = [Bnrimg1, Bnrimg2, Bnrimg3];
    return (
        <div>
            <Header />
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={false}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    <Banner bnrimage={ bnrImgArray } />
                </MDBCarouselInner>
            </MDBCarousel>
            <Homeservices homeserviceimg = { homeServiceImg }/>

        </div>
    )
}

export default Home;