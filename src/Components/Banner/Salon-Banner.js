import React from 'react';
import { MDBCarouselItem, MDBCarouselCaption, MDBMask, MDBView } from 'mdbreact'

const Banner = (bnrimage) => {
<<<<<<< HEAD
    
    bnrimage.map((count) =>{
        return console.log(count) 
    })
    return(
    //     <MDBView className="bnrimag">
    //     <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
    //     <h2>This Navbar is fixed</h2>
    //     <h5>It will always stay visible on the top, even when you scroll down</h5>
    //     <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
    //     <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
    //     </MDBMask>
    // </MDBView>

<>
{ console.log(abc) }

            <MDBCarouselItem itemId="1">
                <MDBView>
                <MDBMask overlay="black-light flex-center flex-column text-white text-center" />
                <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                    alt="First slide"
                />
                <MDBMask />
                </MDBView>
                <MDBCarouselCaption>
                <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p>
                </MDBCarouselCaption>
            </MDBCarouselItem>
            {/* <button type="button" onClick={()=>setImgCount(imgCount + 1)}>button</button> */}
            
       </>
    );
=======
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
>>>>>>> 358fc149bc28b2712de3163b9be69b20b2d362e5
}

export default Banner;