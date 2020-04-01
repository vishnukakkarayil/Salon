import React from 'react';
import { MDBCarouselItem, MDBCarouselCaption, MDBMask, MDBView } from 'mdbreact'

const Banner = (bnrimage) => {
    return (
        <>
            {
                bnrimage.length > 0 ?
                    bnrimage.map(image => (
                        <h1>hello</h1>
                    ))
                    : null
            }
        </>
    )
    //     if(bnrimage){
    //     bnrimage.map((count) =>{
    //         return console.log(count) 
    //     })
    // }
}

export default Banner;