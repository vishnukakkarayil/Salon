import React from 'react';
import { MDBCarouselItem, MDBCarouselCaption, MDBMask, MDBView } from 'mdbreact'

const Banner = (bnrimage) => {
    console.log(bnrimage)
    return (
        <>
            {
                bnrimage.bnrimage.length > 0 ?
                    bnrimage.bnrimage.map(image => (
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <MDBMask overlay="black-light flex-center flex-column text-white text-center" />
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt="First slide"
                                />
                                <MDBMask />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Light mask</h3>
                                <p>First text</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    ))
                    : null
            }
        </>
    )
}

export default Banner;