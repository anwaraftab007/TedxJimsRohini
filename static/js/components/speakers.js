import React from 'react';
var speakerList = require('./speakers/speakerInfo.json')


class Speakers extends React.Component{   
    
    render(){
        const ePast = [], eCurrent=[];
        for (var i = 0; i < speakerList.length; i++)
            {                    
                if(speakerList[i].year == "2025")
                    eCurrent.push(speakerList[i])
                else
                    ePast.push(speakerList[i])
            }

        return (
        <div>
            <div className="nextBG">
                    <iframe 
                    src="https://speakerbgylp.tedxiimbangalore.com/"
                    allowfullscreen></iframe>
                </div>
             <section className="our-speaker-area bg-img section-padding-100-60 bg-gradient-overlay speaker-section " 
                >
                <div className="container speakerDiv">
                <div className="row">
                    <div className="col-12">
                    <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                        <h4>Our Speakers</h4>
                        <p>Here is the line up of speakers for the 2025 edition</p>

                    </div>
                    </div>
                </div>
                {
                        eCurrent.map(speaker =>{
                            return  <div className="row">
                                        <div className="col-12 col-sm-6 col-lg-4">
                                            <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">

                                                <div className="speaker-single-thumb">
                                                <img src={speaker.img} alt />
                                                </div>

                                                {/* <div className="social-info">
                                                <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                                <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                                                <a href="#"><i className="zmdi zmdi-twitter"></i></a>
                                                <a href="#"><i className="zmdi zmdi-linkedin"></i></a>
                                                </div> */}

                                                <div className="speaker-info">
                                                <h5>{speaker.name}</h5>
                                                <p>{speaker.designation}</p>
                                                </div>
                                            </div>
                                        </div>

                                    
                                        <div className="col-12 col-sm-6 col-lg-8">
                                            <div className="single-speaker-area  wow fadeInUp" data-wow-delay="300ms">
                                                <div className="speaker-info-card">
                                                    {/* <h5>Frances Alvarado</h5>
                                                    <span>UX Manager</span> */}
                                                    <p>{speaker.intro}   </p> 
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                        })
                    }
                     {/* <div className="row">

                                    
                                        <div className="col-12 ">
                                            <div className="single-speaker-area  wow fadeInUp" data-wow-delay="300ms">
                                                <div className="speaker-info-card">
                                                    And many more to come! Stay tuned to our Social media outlets...
                                                </div>
                                            </div>
                                        </div> 
                                    </div> */}
                <div className="row">

                    <div className="col-12">
                    <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                        <h4>Past Speakers</h4>
                        <p>These were our speakers in the past years</p>
          
                    </div>
                    </div>
                </div>
          
                    {
                        ePast.map(speaker =>{
                            return  <div className="row">
                                        <div className="col-12 col-sm-6 col-lg-4">
                                            <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">

                                                <div className="speaker-single-thumb">
                                                <img src={speaker.img} alt />
                                                </div>

                                                {/* <div className="social-info">
                                                <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                                <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                                                <a href="#"><i className="zmdi zmdi-twitter"></i></a>
                                                <a href="#"><i className="zmdi zmdi-linkedin"></i></a>
                                                </div> */}

                                                <div className="speaker-info">
                                                <h5>{speaker.name}</h5>
                                                <p>{speaker.year}</p>
                                                </div>
                                            </div>
                                        </div>

                                    
                                        <div className="col-12 col-sm-6 col-lg-8">
                                            <div className="single-speaker-area  wow fadeInUp" data-wow-delay="300ms">
                                                <div className="speaker-info-card">
                                                    {/* <h5>Frances Alvarado</h5>
                                                    <span>UX Manager</span> */}
                                                    <p>{speaker.intro}</p>     
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                        })
                    }
                   
                </div>
            </section>

            {/* <section className="our-schedule-area section-padding-100">
                    <div className="container">
                        <div className="row">

                            <div className="col-12">
                                <div className="section-heading-2 text-center wow fadeInUp" data-wow-delay="300ms">
                                    <p>Our Timetable</p>
                                    <h4>Schedule Plan</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="schedule-tab">

                                    <ul className="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab"
                                        role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link " id="monday-tab" data-toggle="tab" href="#step-one" role="tab"
                                                aria-controls="step-one" aria-expanded="true"> <br/> <span> </span></a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link active" id="tuesday-tab" data-toggle="tab" href="#step-two" role="tab"
                                                aria-controls="step-two" aria-expanded="true">Tuesday <br/> <span>January 15,
                                                    2019</span></a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" id="wednesday-tab" data-toggle="tab" href="#step-three" role="tab"
                                                aria-controls="step-three" aria-expanded="true"> <br/> <span> </span></a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content" id="conferScheduleTabContent">
                                    <div className="tab-pane fade show active" id="step-one" role="tabpanel"
                                        aria-labelledby="monday-tab">

                                        <div className="single-tab-content">
                                            <div className="row">
                                                <div className="col-12">

                                                    <div className="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp"
                                                        data-wow-delay="300ms">

                                                        <div className="single-schedule-tumb-info d-flex align-items-center">

                                                            <div className="single-schedule-tumb">
                                                                <img src="img/bg-img/10.jpg" alt=""/>
                                                            </div>

                                                            <div className="single-schedule-info">
                                                                <h6>Dealing with Difficult People</h6>
                                                                <p>by <span>Gary Armstrong</span> / Ceo of Confer</p>
                                                            </div>
                                                        </div>

                                                        <div className="schedule-time-place">
                                                            <p><i className="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                            <p><i className="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                                        </div>

                                                        <a href="/#" className="btn confer-btn">View More <i
                                                                className="zmdi zmdi-long-arrow-right"></i></a>
                                                    </div>

                                                    <div className="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp"
                                                        data-wow-delay="300ms">

                                                        <div className="single-schedule-tumb-info d-flex align-items-center">

                                                            <div className="single-schedule-tumb">
                                                                <img src="img/bg-img/11.jpg" alt=""/>
                                                            </div>

                                                            <div className="single-schedule-info">
                                                                <h6>Crop Insurance Conference</h6>
                                                                <p>by <span>Amanda Hudson</span> / Ceo of Confer</p>
                                                            </div>
                                                        </div>

                                                        <div className="schedule-time-place">
                                                            <p><i className="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                            <p><i className="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                                        </div>

                                                        <a href="/#" className="btn confer-btn">View More <i
                                                                className="zmdi zmdi-long-arrow-right"></i></a>
                                                    </div>

                                                    <div className="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp"
                                                        data-wow-delay="300ms">

                                                        <div className="single-schedule-tumb-info d-flex align-items-center">

                                                            <div className="single-schedule-tumb">
                                                                <img src="img/bg-img/12.jpg" alt=""/>
                                                            </div>

                                                            <div className="single-schedule-info">
                                                                <h6>Capdm Executive Conference</h6>
                                                                <p>by <span>Martha Burke</span> / Ceo of Confer</p>
                                                            </div>
                                                        </div>

                                                        <div className="schedule-time-place">
                                                            <p><i className="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                            <p><i className="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                                        </div>

                                                        <a href="/#" className="btn confer-btn">View More <i
                                                                className="zmdi zmdi-long-arrow-right"></i></a>
                                                    </div>

                                                    <div className="single-schedule-area d-flex flex-wrap justify-content-between align-items-center wow fadeInUp"
                                                        data-wow-delay="300ms">

                                                        <div className="single-schedule-tumb-info d-flex align-items-center">

                                                            <div className="single-schedule-tumb">
                                                                <img src="img/bg-img/13.jpg" alt=""/>
                                                            </div>

                                                            <div className="single-schedule-info">
                                                                <h6>Street Food Convention</h6>
                                                                <p>by <span>Jeffrey Morales</span> / Ceo of Confer</p>
                                                            </div>
                                                        </div>

                                                        <div className="schedule-time-place">
                                                            <p><i className="zmdi zmdi-time"></i> 12-14 Jan 2019</p>
                                                            <p><i className="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                                                        </div>

                                                        <a href="/#" className="btn confer-btn">View More <i
                                                                className="zmdi zmdi-long-arrow-right"></i></a>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
        </div>
        )
    };
}
export default Speakers;