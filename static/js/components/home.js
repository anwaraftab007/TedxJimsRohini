import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Countdown from 'react-countdown';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
var speakerList = require('./speakers/speakerInfo.json')

class Home extends React.Component{
    options = {
        loop: true,
        center: true,
        // items: ,
        margin: 20,
        autoplay: true,
        dots: false,
        autoplayTimeout: 2500,
        responsiveClass:true,
        smartSpeed: 450,
        nav: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    };
    renderer = ({ days,hours, minutes, seconds }) => {
 {
          // Render a countdown
          return <div id="clock"><div>{days} <span>Days</span></div> <div>{hours}<span>Hours</span></div> <div>{minutes} <span>Minutes</span></div> <div>{seconds} <span>Seconds</span></div></div>
         
        }
      };


    render(){
        const featured = [];
        const images = [
            "/img/slider/1.webp",
            "/img/slider/2.webp",
            "/img/slider/3.webp",
            "/img/slider/4.webp",
            "/img/slider/5.webp",
            "/img/slider/6.webp",
            "/img/slider/7.webp",
            "/img/slider/8.webp",
          ];
        for (var i = 0; i < speakerList.length; i++)
            {
                if(speakerList[i].featured == "true")
                featured.push(speakerList[i])
               
            }

        return (
           <div>
                <section className="welcome-area">
                <div className="nextBG">
                    <iframe 
                    src="https://spectacular-cupcake-4659e6.netlify.app/index7"
                    allowFullScreen></iframe>
                </div>
                <div className='single-welcome-slide bg-img bg-overlay jarallax welcomeBG' >
                        <div className="container h-100">
                                <div className="row h-100 align-items-center ">

                                    <div className="col-12">
                                        <div className="welcome-text-two text-center">
                                            <h5 data-animation="fadeInUp" data-delay="100ms">TEDx IIMBangalore 2025 </h5>
                                            <h2 data-animation="fadeInUp" data-delay="300ms">Roots<span className='theRed'> & </span>Wings</h2>
                                            <div className="event-meta" data-animation="fadeInUp" data-delay="500ms">
                                                
                                                <a className="event-date" href="/#"> January 12,
                                                    2025</a>
                                                {/* <a className="event-author" href="/#"><i className="zmdi zmdi-alarm-check"></i> Laura
                                                    Green</a> */}
                                            </div>
                                            <div className="hero-btn-group" data-animation="fadeInUp" data-delay="700ms">
                                            {/* <div className="icon-scroll" id="scrollDown"></div> */}

                                            <Link to="/about" className="btn confer-btn m-2"> Learn more! <i  className="zmdi zmdi-long-arrow-right"></i></Link> 
                                            <Link to="/tickets" className="btn confer-btn m-2"> Get Tickets <i  className="zmdi zmdi-long-arrow-right"></i></Link>

                                              
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    {/* <OwlCarousel className='welcome-slides owl-carousel' {...this.options}>
                    <div className='single-welcome-slide bg-img bg-overlay jarallax' style={{'backgroundImage': "url('img/bg-img/45.jpg')"}}>
                        <div className="container h-100">
                                <div className="row h-100 align-items-center ">

                                    <div className="col-12">
                                        <div className="welcome-text-two text-center">
                                            <h5 data-animation="fadeInUp" data-delay="100ms">TEDx IIMBangalore 2024 </h5>
                                            <h2 data-animation="fadeInUp" data-delay="300ms">Nurture the Ne<span className='theRed'>X</span>t</h2>

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='single-welcome-slide bg-img bg-overlay jarallax' style={{'backgroundImage': "url('img/bg-img/LandingPageImage.webp')"}}>
                            <div className="container h-100">
                                <div className="row h-100 align-items-center">

                                    <div className="col-12">
                                        <div className="welcome-text text-right">
                                            <h2 data-animation="fadeInUp" data-delay="300ms">TED<span className='x-factor'>x</span></h2>
                                            <h3 data-animation="fadeInUp" data-delay="300ms">IIM Bangalore</h3>
                                            <h6 data-animation="fadeInUp" data-delay="500ms">Theme of this year</h6>
                                            <div className="hero-btn-group" data-animation="fadeInUp" data-delay="700ms">
                                               
                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
            
                        
                    </OwlCarousel> */}

                        
                    

                    <div className="icon-scroll" id="scrollDown"></div>
                </section>


                <section className="about-us-countdown-area  section-padding-100-0 welcomeBG" id="about"  >
                    <div className="container">
                        <div className="row align-items-center">

                        <div className="col-12 col-md-6">
                                <div className="about-thumb mb-80 wow fadeInUp" data-wow-delay="300ms">
                                    <img src="img/bg-img/introx.webp" alt=""/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="about-content-text mb-80">
                                    <h6 className="wow fadeInUp" data-wow-delay="300ms"></h6>
                                    <h3 className="wow fadeInUp" data-wow-delay="300ms">Roots<span className='theRed'> & </span>Wings</h3>
                                    <p className="wow fadeInUp" data-wow-delay="300ms">The theme "Roots & Wings" embodies the delicate dance between heritage and aspiration. It speaks to the duality of our human experience—grounded in our past, yet driven by an innate desire to soar.</p>
                                    <Link to="/about" className="btn confer-btn-white"> <a >Learn more <i
                                            className="zmdi zmdi-long-arrow-right"></i></a> </Link>
                                </div>
                            </div>

                           
                        </div>
                    </div>

                    
                </section>


               


                <section className="our-speaker-area bg-img bg-gradient-overlay section-padding-100-60"
                   >
                    <div className="container">
                        <div className="row">

                            <div className="col-12">
                                <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                                    {/* <p>Past Speakings</p> */}
                                    <h4>Our Speakers</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <OwlCarousel {...this.options}>
                                {
                                    featured.map(speaker =>{
                                        return  <div>
                                                <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">

                                                    <div className="speaker-single-thumb">
                                                        <img src={speaker.img} alt=""/>
                                                    </div>


                                                    <div className="speaker-info">
                                                        <h5>{speaker.name}</h5>
                                                        {/* <p>{speaker.year}</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                    })
                                }
                            </OwlCarousel>
                            <div className="col-12">
                                <div className="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp" data-wow-delay="300ms">
                                   <Link to="/speakers" className="btn confer-btn-white"> <a >view all Speakers <i
                                            className="zmdi zmdi-long-arrow-right"></i></a> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="about-us-countdown-area  section-padding-100-0 welcomeBG" id="about"  >
                    <div className="container">
                        <div className="row align-items-center">

                                    <div className="col-12 col-md-6">
                                        <div className="about-thumb mb-80 wow fadeInUp" data-wow-delay="300ms">
                                            <OwlCarousel
                                            className="owl-theme"
                                            items={1}
                                            loop
                                            autoplay
                                            autoplayTimeout={3000}
                                            dots={true}
                                            nav={false}
                                            >
                                            {images.map((img, index) => (
                                                <img
                                                key={index}
                                                src={img}
                                                alt={`Slide ${index + 1}`}
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                    borderRadius: "8px", // Optional styling
                                                }}
                                                />
                                            ))}
                                            </OwlCarousel>
                                        </div>
                                        </div>


                            <div className="col-12 col-md-6">
                                <div className="about-content-text mb-80">
                                    <h3 className="wow fadeInUp" data-wow-delay="300ms">2024 : Nurturing the Ne<span className='theRed'>X</span>t</h3>
                                    <p className="wow fadeInUp" data-wow-delay="300ms">The last edition of TEDxIIMBangalore, held on January 13, 2024, as part of IIM Bangalore's 50th-year celebration, featured 11 speakers. It focused on mentorship, innovation, and empowering future generations, while celebrating growth and building a lasting legacy.</p>
                                    <Link to="/prevEdition" className="btn confer-btn-white"> <a >Learn more <i
                                            className="zmdi zmdi-long-arrow-right"></i></a> </Link>
                                </div>
                            </div>

                           
                        </div>
                    </div>

                    
                </section>


                <section className="about-us-countdown-area  section-padding-100-0" id="about"  >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="about-content-text mb-80">
                                    <span className='wow fadeInUp theRed'>about</span>
                                    <h3 className="wow fadeInUp " data-wow-delay="300ms">TED & TEDx</h3>

                                </div>
                            </div> 
                        </div>
                        <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                                <div className="about-content-text mb-80 wow fadeInUp" data-wow-delay="300ms">
                                    <p><span className='theRed'>TED</span> began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. TEDx is a grassroots initiative, created in the spirit of TED’s overall mission to research and discover “ideas worth spreading.” TEDx brings the spirit of TED to local communities around the globe through TEDx events. </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="about-content-text mb-80 wow fadeInUp" data-wow-delay="300ms">
                                    <p><span className='theRed'>TEDx</span> events are organized by passionate individuals who seek to uncover new ideas and to share the latest research in their local areas that spark conversations in their communities. These events include live speakers and recorded TED Talks, and are organized independently under a free license granted by TED. These events are not controlled by TED, but event organizers agree to abide by our format, and are offered guidelines for curation, speaker coaching, event organizing and more. They learn from us and from each other. More than 3000 events are now held annually.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </section>

               

            <div className="map-area">
                <iframe 
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBIZGJQrDWCVdsR9j2UAHqhIMsL7stODJk&q=IIM+Bengaluru+Auditorium"
                allowFullScreen></iframe>
            </div>




                

{/* 
                <section className="our-blog-area bg-img bg-gradient-overlay section-padding-100-60"
                    style={{'backgroundImage': "url('img/bg-img/17.jpg')"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">

                                <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                                    <p>Our Blog</p>
                                    <h4>Latest news</h4>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-blog-area wow fadeInUp" data-wow-delay="300ms">

                                    <div className="single-blog-thumb">
                                        <img src="img/bg-img/18.jpg" alt=""/>
                                    </div>
                                    <div className="single-blog-text text-center">
                                        <a className="blog-title" href="/#">Street Food Convention</a>

                                        <div className="post-meta">
                                            <a className="post-date" href="/#"><i className="zmdi zmdi-alarm-check"></i> January 14, 2019</a>
                                            <a className="post-author" href="/#"><i className="zmdi zmdi-account"></i> Laura Green</a>
                                        </div>
                                        <p>Street Food Convention will showcase products like Packed food, beef and lamb, street
                                            food.</p>
                                    </div>
                                    <div className="blog-btn">
                                        <a href="/#"><i className="zmdi zmdi-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-blog-area wow fadeInUp" data-wow-delay="300ms">

                                    <div className="single-blog-thumb">
                                        <img src="img/bg-img/19.jpg" alt=""/>
                                    </div>
                                    <div className="single-blog-text text-center">
                                        <a className="blog-title" href="/#">Tedx Moscow Conference</a>

                                        <div className="post-meta">
                                            <a className="post-date" href="/#"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                                            <a className="post-author" href="/#"><i className="zmdi zmdi-account"></i>Laura Green</a>
                                        </div>
                                        <p>Street Food Convention will showcase products like Packed food, beef and lamb, street
                                            food.</p>
                                    </div>
                                    <div className="blog-btn">
                                        <a href="/#"><i className="zmdi zmdi-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-blog-area wow fadeInUp" data-wow-delay="300ms">

                                    <div className="single-blog-thumb">
                                        <img src="img/bg-img/20.jpg" alt=""/>
                                    </div>
                                    <div className="single-blog-text text-center">
                                        <a className="blog-title" href="/#">Los Angeles Institute</a>

                                        <div className="post-meta">
                                            <a className="post-date" href="/#"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                                            <a className="post-author" href="/#"><i className="zmdi zmdi-account"></i>Laura Green</a>
                                        </div>
                                        <p>Street Food Convention will showcase products like Packed food, beef and lamb, street
                                            food.</p>
                                    </div>
                                    <div className="blog-btn">
                                        <a href="/#"><i className="zmdi zmdi-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                   
            </div>
        )
    }
}

export default Home;
