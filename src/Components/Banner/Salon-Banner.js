import React from 'react';
import { MDBCarouselItem, MDBCarouselCaption, MDBMask, MDBView } from 'mdbreact'

const Banner = (bnrimage) => {
    if(bnrimage){
    bnrimage.map((count) =>{
        return console.log(count) 
    })
}
}

export default Banner;