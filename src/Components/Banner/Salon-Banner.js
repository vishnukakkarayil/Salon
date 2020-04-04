import React from 'react';
import { MDBCarouselItem, MDBCarouselCaption, MDBMask, MDBView, MDBContainer, MDBCol, MDBRow } from 'mdbreact'

const Banner = ({ bnrimage, bnrStyle }) => {
    return (
        <>
            {
                bnrimage.length > 0 ?
                    bnrimage.map((image, index) => (
                        <MDBCarouselItem itemId={index}>
                            <MDBView>
                                <MDBMask overlay="blue" />
                                <img
                                    className={bnrStyle}
                                    src={image}
                                    alt="Banner image"
                                />                                
                                <MDBMask />
                            </MDBView>
                            <MDBCarouselCaption className="banner-caption">
                                <MDBContainer>
                                    <MDBRow>
                                        <MDBCol size="6" md="6">
                                            <h1 className="h1-responsive font-weight-bold mt-sm-5">
                                            Make purchases with our app
                                            </h1>
                                            {/* <hr className="hr-light" /> */}
                                            <h6 className="mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                                            veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                                            molestiae iste.
                                            </h6>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    ))
                    : null
            }
        </>
    )
}

Banner.defaultProps = {
    bnrStyle: "defaultBnrStyle"
}
export default Banner;