import React from 'react'

const Homeservices = ({homeserviceimg}) => {
    console.log(homeserviceimg);
    return(
        <div className="h-services mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Popular styile</h2>
                        <span className="line-wrap"></span>
                        <div className="h-service-img">                       
                            {
                                homeserviceimg.map((serviceimg, index) =>{
                                    return(
                                        <figure className="home-s-img">
                                            <img key= {index} src={ serviceimg } />
                                        </figure>
                                    )
                                })
                            }
                         </div>
                    </div>
                    <div className="col-md-6">
                        <h2></h2>
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default Homeservices