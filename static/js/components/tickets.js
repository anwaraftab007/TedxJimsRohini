import React from 'react';


class Tickets extends React.Component{   
    
    render(){
        return (
        <div>
              {/* <section className="breadcrumb-area bg-img inverse-header-overlay jarallax"
                style={{'backgroundImage': "url('img/bg-img/27.jpg')"}}>
                <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                    <div className="breadcrumb-content">
                        <h2 className="page-title">Tickets</h2>
                        <p className=''>
                            Are you ready to attend the event?
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </section> 

            <section className="breadcrumb-area bg-img inverse-header-overlay jarallax section-padding-100 ticketHeaderArea" >
                <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="call-to-action-content text-center">
                        <div className="call-to-action-heading">
                        <h2>Tickets</h2>
                        <h6>Coming soon!</h6>
                        </div>
                        <div className="event-time">
                        <p><i className="zmdi zmdi-alarm-check"></i> 13 Jan 2024</p>
                        <p><i className="zmdi zmdi-map"></i>Auditorium, IIMB</p>
                        </div>
                    </div>
                    {/* <div className="ticket-btn text-center">
                        <a href="#" className="btn confer-btn-white-2 mt-40">Remind me  <i className="zmdi zmdi-long-arrow-right"></i></a>
                    </div> 
                    </div>
                </div>
                </div>
            </section> */}
                <div className="nextBG">
                    <iframe className='ticketBGWrapper' 
                    src="https://homebgylp.tedxiimbangalore.com/index4.html"
                    allowfullscreen></iframe>
                </div>


            <section className="our-ticket-pricing-table-area section-padding-100-0 ticketHeaderArea">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                    <div className="call-to-action-content text-center">
                        <div className="call-to-action-heading ticketCardHeader">
                            <h2>Tickets</h2>

                        </div>
                        </div>

                    </div>
                    </div>
                <div className="row">
                <div className="col-12">
                    
                    {/* <div className="ticket-btn text-center">
                        <a href="#" className="btn confer-btn-white-2 mt-40">Remind me  <i className="zmdi zmdi-long-arrow-right"></i></a>
                    </div> */}
                    </div>
                    <div className="col-12 col-lg-4">
                    <div className="single-ticket-pricing-table style-2 text-center mb-100 wow fadeInUp" data-wow-delay="300ms">
                        <h6 className="ticket-plan">1 day pass</h6>

                        <div className="ticket-icon">
                        <img src="img/core-img/p1.png" alt/>
                        </div>
                        <h2 className="ticket-price"><span>$</span>59</h2>
                        <a href="#" className="btn confer-btn w-100 mb-30">Get Tickets <i className="zmdi zmdi-long-arrow-right"></i></a>

                        <div className="ticket-pricing-table-details">
                        <p><i className="zmdi zmdi-check"></i> One Day Conference Ticket</p>
                        <p><i className="zmdi zmdi-check"></i> Coffee-break</p>
                        <p><i className="zmdi zmdi-check"></i> Lunch and Networking</p>
                        <p><i className="zmdi zmdi-check"></i> Keynote talk</p>
                        <p><i className="zmdi zmdi-check"></i> Talk to the Editors Session</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp"
                        data-wow-delay="300ms">
                        <h6 className="ticket-plan">Full pass</h6>

                        <div className="ticket-icon">
                        <img src="img/core-img/p2.png" alt/>
                        </div>
                        <h2 className="ticket-price"><span>$</span>99</h2>
                        <a href="#" className="btn confer-btn w-100 mb-30">Get Tickets <i className="zmdi zmdi-long-arrow-right"></i></a>

                        <div className="ticket-pricing-table-details">
                        <p><i className="zmdi zmdi-check"></i> One Day Conference Ticket</p>
                        <p><i className="zmdi zmdi-check"></i> Coffee-break</p>
                        <p><i className="zmdi zmdi-check"></i> Lunch and Networking</p>
                        <p><i className="zmdi zmdi-check"></i> Keynote talk</p>
                        <p><i className="zmdi zmdi-check"></i> Talk to the Editors Session</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-ticket-pricing-table style-2 text-center mb-100 wow fadeInUp" data-wow-delay="300ms">
                        <h6 className="ticket-plan">Group pass</h6>

                        <div className="ticket-icon">
                        <img src="img/core-img/p3.png" alt/>
                        </div>
                        <h2 className="ticket-price"><span>$</span>199</h2>
                        <a href="#" className="btn confer-btn w-100 mb-30">Get Tickets <i className="zmdi zmdi-long-arrow-right"></i></a>

                        <div className="ticket-pricing-table-details">
                        <p><i className="zmdi zmdi-check"></i> One Day Conference Ticket</p>
                        <p><i className="zmdi zmdi-check"></i> Coffee-break</p>
                        <p><i className="zmdi zmdi-check"></i> Lunch and Networking</p>
                        <p><i className="zmdi zmdi-check"></i> Keynote talk</p>
                        <p><i className="zmdi zmdi-check"></i> Talk to the Editors Session</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>



        </div>
        )
    };
}
export default Tickets;